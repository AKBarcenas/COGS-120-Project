var data = require("../data/format.json");

exports.getFoodPlace = function(req, res) {
	var food = req.query.food;

	if(data[food])  {
		var foodPlaces = data[food];
		var placesCount = foodPlaces.length;
		var random = Math.random();
		var returnIndex = parseInt(placesCount * random);

		console.log(random);
		console.log(parseInt(placesCount * random));
		res.status(200).json(foodPlaces[returnIndex]);
	}

	else  {
    	res.status(200).json({
			"placeName": "NULL",
			"description": "",
			"placeAddress": ""
		});
    }
}