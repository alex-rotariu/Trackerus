const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	birthdate: {
		type: Data,
		required: true
	},
	description: {
		type: String
	},
	tracks: {
		type: Number,
		default: 0
	},
	followers: {
		type: Number,
		default: 0
	},
	following: {
		type: Number,
		default: 0
	},
	profilePic: {
		data: Buffer,
		contentType: String
	}
});

userSchema.pre("save", function (next) {
	const user = this;
	if (!user.isModified("password")) {
		return next();
	}
	bcrypt.genSalt(10, (err, salt) => {
		if (err) {
			return next(err);
		}
		bcrypt.hash(user.password, salt, (err, hash) => {
			if (err) return next(err);
			user.password = hash;
			next();
		});
	});
});

userSchema.methods.comparePassword = function (candidatePassword) {
	const user = this;
	return new Promise((resolve, reject) => {
		bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
			if (err) {
				return reject(err);
			}
			if (!isMatch) {
				return reject(false);
			}
			resolve(true);
		});
	});
};

mongoose.model("User", userSchema);
