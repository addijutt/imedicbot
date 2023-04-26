require("../models/Term");
require("../models/Article");

let fetch = require("node-fetch");

let mongoose = require("mongoose");
let convert = require("xml-js");
let Term = mongoose.model("Term");
let Article = mongoose.model("Article");
let constants = require("./constants");
let fs = require("fs");
const moment = require("moment");

const convertDateObjToString = (dateObj) => {
	try {
		console.log("dateObj==============================", dateObj);
		const dateString = new Date(`${dateObj?.year} ${dateObj?.month} ${dateObj?.day}`);
		console.log("date==============================", dateString);
		if (dateString == "Invalid Date") return new Date();

		return dateString;
	} catch (error) {
		return new Date();
	}
};

const scrapAuthors = (authors) => {
	try {
		let data = authors?.Author?.map((author) => {
			return {
				foreName: author?.ForeName?._text,
				lastName: author?.LastName?._text,
				initials: author?.Initials?._text,
				affiliationInfo: author?.AffiliationInfo?.Affiliation?._text || "nill",
			};
		});
		return data;
	} catch (error) {
		console.log(error);
		return [];
	}
};

const scrapKeywords = (keywords) => {
	try {
		if (!keywords) return [];
		return keywords?.Keyword?.map((keyword) => keyword?._text);
	} catch (error) {
		return [];
	}
};

const scrapStudyDesign = (abstract) => {
	try {
		let design = abstract?.find((text) => {
			return text?._attributes?.Label === "METHODS";
		});
		if (!design) return "nill";
		return design?._text;
	} catch (error) {
		return "nill";
	}
};
const scrapOtherInfo = (abstract) => {
	try {
		let info = abstract?.find((text) => {
			return text?._attributes?.Label === "RESULTS";
		});
		if (!info) return "nill";
		return info?._text;
	} catch (error) {
		return "nill";
	}
};

const scrapAbstract = (abstract) => {
	try {
		let abstractInfo = "";
		if (abstract?.AbstractText?._text && !abstract?.AbstractText?._text.length ) abstractInfo = abstract?.AbstractText?._text;
		else
			abstract?.AbstractText?.forEach((text) => {
                abstractInfo += text?._text;
            });

        console.log("abstractInfo==============================", abstractInfo);
		return abstractInfo;
	} catch (error) {
		console.log(error);
		return "nill";
	}
};

async function getList(term) {
	let query = {
		email: constants?.email,
		api_key: constants?.api_key,
		db: constants?.db,
		retmode: constants?.retmode,
		retmax: constants?.retmax,
		term: term?.name,
	};

	let url = constants?.base_url + constants?.search_api + "?" + new URLSearchParams(query)?.toString();
	try {
		let response = await fetch(url);
		let data = await response?.text();
		let json = convert?.xml2json(data, { compact: true, spaces: 4 });
		let result = JSON?.parse(json);
		return result;
	} catch (error) {
		console?.log(error);
	}
}

async function getArticle(id) {
	try {
		let query = {
			email: constants?.email,
			api_key: constants?.api_key,
			db: constants?.db,
			retmode: constants?.retmode,
			id: id,
		};

		let url = constants?.base_url + constants?.fetch_api + "?" + new URLSearchParams(query)?.toString();
		let response = await fetch(url);
		let data = await response?.text();
		let json = convert?.xml2json(data, { compact: true, spaces: 4 });
		console?.log(json, "json");
		let result = JSON?.parse(json);

		let filteredData = {
			pubMedID: id,
			publicationDate: {
				year: result?.PubmedArticleSet?.PubmedArticle?.MedlineCitation?.Article?.Journal?.JournalIssue?.PubDate?.Year
					?._text,
				month:
					result?.PubmedArticleSet?.PubmedArticle?.MedlineCitation?.Article?.Journal?.JournalIssue?.PubDate?.Month
						?._text,
				day: result?.PubmedArticleSet?.PubmedArticle?.MedlineCitation?.Article?.Journal?.JournalIssue?.PubDate?.Day
					?._text,
			},
			title: result?.PubmedArticleSet?.PubmedArticle?.MedlineCitation?.Article?.ArticleTitle?._text,
			authors: scrapAuthors(result?.PubmedArticleSet?.PubmedArticle?.MedlineCitation?.Article?.AuthorList),
			journal: result?.PubmedArticleSet?.PubmedArticle?.MedlineCitation?.Article?.Journal?.Title?._text,
			abstract: scrapAbstract(result?.PubmedArticleSet?.PubmedArticle?.MedlineCitation?.Article?.Abstract),
			keywords: scrapKeywords(result?.PubmedArticleSet?.PubmedArticle?.MedlineCitation?.KeywordList),
			fullTextURL: "nill",
			type: result?.PubmedArticleSet?.PubmedArticle?.MedlineCitation?.Article?.PublicationTypeList?.PublicationType
				?._text,
			studyDesign: scrapStudyDesign(
				result?.PubmedArticleSet?.PubmedArticle?.MedlineCitation?.Article?.Abstract?.AbstractText
			),
			otherInfo: scrapOtherInfo(
				result?.PubmedArticleSet?.PubmedArticle?.MedlineCitation?.Article?.Abstract?.AbstractText
			),
		};

		return filteredData;
	} catch (error) {
		console.log(error);
		return {};
	}
}

async function seedArticles() {
	try {
		let terms = await Term.find();
		if (terms.length > 0) {
			for (let i = 29; i < terms.length; i++) {
				console.log(`${i + 1}. Getting articles for ${terms[i].name}\n`);
				let list = await getList(terms[i]);

				let ids = [];
				if (list?.eSearchResult?.IdList?.Id?.length > 0) ids = list?.eSearchResult?.IdList?.Id?.map((id) => id?._text);
				console.log("ids", ids);
				terms[i].articles = ids;
				await terms[i].save();

				if (ids.length > 0) {
					for (let j = 0; j < ids.length; j++) {
						console.log(`\t${j + 1}. Getting article with id ${ids[j]}`);
						let article = await getArticle(ids[j]);
						console.log("article", article);

						let newArticle = new Article();
						newArticle.pubMedID = article.pubMedID;
						newArticle.publicationDate = convertDateObjToString(article.publicationDate);
						newArticle.title = article.title;
						newArticle.authors = article.authors;
						newArticle.journal = article.journal;
						newArticle.abstract = article.abstract;
						newArticle.keywords = article.keywords;
						newArticle.fullTextURL = article.fullTextURL;
						newArticle.type = article.type;
						newArticle.studyDesign = article.studyDesign;
						newArticle.otherInfo = article.otherInfo;
						newArticle.term = terms[i]._id;
						await newArticle.save().catch((error) => console.log(error));
						// fs?.writeFileSync("temp.article", json);
						// if (j === 0) break;
					}
				}
			}
		}
	} catch (error) {
		console.log(error);
	}
}

module.exports = seedArticles;
