const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const mongoosePaginate = require("mongoose-paginate-v2");
const slug = require("slug");

let ArticleSchema = new mongoose.Schema({
	slug: { type: String, lowercase: true, unique: true },
	pubMedID: { type: String, unique: true },
	title: { type: String },
	authors: [
		{
			foreName: String,
			lastName: String,
			initials: String,
			affiliationInfo: String,
		},
	],
	publicationDate: { type: Date },
	journal: { type: String },
	abstract: { type: String },
	keywords: [{ type: String }],
	fullTextURL: { type: String },
	type: { type: String },
	studyDesign: { type: String },
	otherInfo: { type: String },

	term: { type: mongoose.Schema.Types.ObjectId, ref: "Term" },
});

ArticleSchema.plugin(uniqueValidator, { message: "is already taken" });
ArticleSchema.plugin(mongoosePaginate);

ArticleSchema.pre("validate", function (next) {
	if (!this.slug) {
		this.slugify();
	}
	next();
});

ArticleSchema.methods.slugify = function () {
	this.slug = slug(((Math.random() * Math.pow(36, 6)) | 0).toString(36));
};

var autoPopulate = function (next) {
	next();
};

ArticleSchema.pre("findOne", autoPopulate);
ArticleSchema.pre("find", autoPopulate);

module.exports = mongoose.model("Article", ArticleSchema);
