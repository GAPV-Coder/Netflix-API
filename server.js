const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const userRoutes = require("./routes/UserRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("DB Connection Successfull!"))
	.catch(err => {
		console.log("Sorry, an error occurred with the DB connection!", err);
	});

app.use("/api/user", userRoutes);

app.listen(process.env.PORT || 5000, () => {
	console.log("Backend server is running!");
});
