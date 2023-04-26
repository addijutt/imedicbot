const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const mongoosePaginate = require("mongoose-paginate-v2");
const slug = require("slug");

let TermSchema = new mongoose.Schema({
	slug: { type: String, lowercase: true, unique: true },
	name: String,
	type: String,
	articles: [{ type: String }],
});

TermSchema.plugin(uniqueValidator, { message: "is already taken" });
TermSchema.plugin(mongoosePaginate);

TermSchema.methods.slugify = function () {
	this.slug = slug(((Math.random() * Math.pow(36, 6)) | 0).toString(36));
};

var autoPopulate = function (next) {
	next();
};

TermSchema.pre("findOne", autoPopulate);
TermSchema.pre("find", autoPopulate);

module.exports = mongoose.model("Term", TermSchema);
