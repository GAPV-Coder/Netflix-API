const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log("DB Connection Successfull!"))
	.catch(err => {
		console.log("Sorry, an error occurred with the DB connection!", err);
	});

const app = express();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT || 5000, () => {
	console.log("Backend server is running!");
});
