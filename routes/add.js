var data = require("../data/restaurants.json");

exports.addFavorite = function(req, res) {
	var name = req.query.name;
	var address = req.query.address;
	var food = req.query.food;
	console.log("AYY MACARENA");
	//console.log(req);
	console.log(name);
	console.log(address);
	console.log(food);

	var newFavorite =
	{
      "name": name,
      "description": food,
      "location": address
    }

    var test = newFavorite;
    console.log(test);
    test.name = "test";
    test.description = "test";
    test.location = "test";
    console.log(test);


    data.favorites.push(newFavorite);
}