const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");

const path = require("path");
const generateId = require("./utils/generateId");
const genUserToken = require("./utils/genUserToken");
const validateUserToken = require("./utils/validateUserToken");
const registerUser = require("./utils/registerUser");
const users = require("./data/users");


//MIDDLEWARES
app.use(express.urlencoded( {extended: false}) );

//PORTS
app.listen(3000,);



//ROUTES

app.post("/register", cors(), multer().none(), (req, res) => {
	const newUserData = req.body;

	registerUser(newUserData)
		.then( (token) => {
			console.log(users);
			res.status(200).send(JSON.stringify(token));
		})
		.catch( (err) => {
			console.log(err.message);
			res.status(400).send(err.message);
		});
});


app.get( "/images/tomates.jpg",  ( req, res ) => {
	res.sendFile(path.join(__dirname + "/public/images/tomates.jpg"));
});
