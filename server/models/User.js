const mongoose = require('mongoose');
let crypto = require("crypto");
let jwt = require("jsonwebtoken");
let secret = require("../config").secret;

const Schema = mongoose.Schema;

const userSchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },

    hash: { type: String, default: null },
    salt: String,

},
{ timestamps: true }

);

userSchema.methods.validPassword = function (password) {
	let hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
	return this.hash === hash;
};

userSchema.methods.setPassword = function (password) {
	this.salt = crypto.randomBytes(16).toString("hex");
	this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, "sha512").toString("hex");
};

// userSchema.methods.generatePasswordRestToken = function () {
// 	this.resetPasswordToken = crypto.randomBytes(20).toString("hex");
// };

// userSchema.methods.generateMailToken = function () {
// 	this.mailToken = crypto.randomBytes(10).toString("hex");
// };

userSchema.methods.generateJWT = function () {
	let today = new Date();
	let exp = new Date(today);
	exp.setDate(today.getDate() + 60);

	return jwt.sign(
		{
			id: this._id,
			email: this.email,
			exp: parseInt(exp.getTime() / 1000),
		},
		secret
	);
};


userSchema.methods.toAuthJSON = function () {
	return {
		_id: this._id,
		companyName: this.companyName,
		email: this.email,
		token: this.generateJWT(),
	};
};




module.exports = mongoose.model('User', userSchema)