var data = require("../data/preferences.json");
var fs = require("fs");

exports.setPreference = function(req, res) {
	var preferenceCategory = req.query.category;
	//var newPreference = req.query.preference;
	console.log(data);

	//data[preferenceCategory] = newPreference;

	console.log(data);

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