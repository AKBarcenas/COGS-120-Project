var data = require("../data/preferences.json");
var fs = require("fs");

exports.setPreference = function(req, res) {
	var miles = req.query.miles;
	var dollars = req.query.dollars;
	var japanese = req.query.japanese;
	var korean = req.query.korean;
	var mexican = req.query.mexican;
	var american = req.query.american;
	var chinese = req.query.chinese;
	
	data.miles = miles;
	data.dollars = dollars;
	data.japanese = japanese;
	data.korean = korean;
	data.mexican = mexican;
	data.american = american;
	data.chinese = chinese;

	console.log(data);

	fs.writeFileSync("./data/preferences.json", JSON.stringify(data));

	/*if(data[preference])  {
		var foodPlaces = data[food];
		var placesCount = foodPlaces.length;
		var random = Math.random();
		var returnIndex = parseInt(placesCount * random);

		console.log(random);
		console.log(parseInt(placesCount * random));

		fs.writeFileSync("../data/preferences.json", data);
	}*/
}

exports.getPreference = function(req, res) {
	res.status(200).json(data);
}