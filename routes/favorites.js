var data = require('../data/restaurants.json');

exports.view = function(req, res){
	console.log(data);
	res.render('favorites', data);
};