// api key: &apikey=thewdb

const express = require("express");
const app = express();
const request = require("request");
const axios = require("axios");

app.use(express.static("public"));
app.set("view engine", "ejs");


// app.get("/results", function(req,res){
// 	let query = req.query.search;
// 	let url = `http://www.omdbapi.com/?s=${query}&apikey=thewdb`;
// 	request(url, function(error, response, body){
// 		if(!error && response.statusCode == "200"){
// 			let data = JSON.parse(body)
// 			res.render("results", {data: data});
// 		}
// 	})
// });

app.get("/results", function(req, res){
	let query = req.query.search;
	let url = `http://www.omdbapi.com/?s=${query}&apikey=thewdb`;
	axios.get(url)
	.then( (response) => {
		let data = response.data;
		res.render("results", {data: data})
		//console.log(response.data);
	})
	.catch((error) =>{
		console.log(error);
	})
});

app.get("/search", (req,res) => {
	res.render("search");
});

app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});