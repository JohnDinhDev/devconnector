const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.MONGO_URI;

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB Connected...");
	} catch (error) {
		console.error(error.message);
		// Exit Process With Error
		process.exit(1);
	}
};

module.exports = connectDB;
