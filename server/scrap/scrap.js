const mongoose = require("mongoose");

require("../models/Term");
require("../models/Article");

let seedTerms = require("./terms");
let seedArticles = require("./articles");

let con = mongoose
	.connect("mongodb://localhost:27017/imedicbot", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.catch((err) => {
		console.log(err);
		process.exit(1);
	})
	.then(() => {
		console.log("connected to db in development environment");
		init();
	});

async function init() {
	console.log("starting");
	// await clearDB();
	// await seedTerms();
	await seedArticles();
	exit();
}

async function clearDB() {
	await mongoose.connection.db.dropDatabase();
}

function exit() {
	console.log("exiting");
	process.exit(1);
}

//handle all exceptions so that program never crashes
process.on("uncaughtException", (err) => {
	console.log(err);
});

//handle all unhandled rejections so that program never crashes
process.on("unhandledRejection", (err) => {
	console.log(err);
})
