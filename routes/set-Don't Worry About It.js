var data = require("../data/preferences.json");
var fs = require("fs");

exports.setPreference = function(req, res) {
	data.miles = req.query.miles;
	data.dollars = req.query.dollars;
	data.japanese = req.query.japanese;
	data.korean = req.query.korean;
	data.mexican = req.query.mexican;
	data.american = req.query.american;
	data.chinese = req.query.chinese;
	data.nuts = req.query.nuts;
	data.soy = req.query.soy;
	data.egg = req.query.egg;
	data.gluten = req.query.gluten;
	data.fish = req.query.fish;
	data.milk = req.query.milk;
	data.other = req.query.other;

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