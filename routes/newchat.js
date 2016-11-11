var data = require('../data.json');
var fs = require('fs');

exports.view = function(req, res){
	res.render('newchat');	
	//res.render('favorites', data);
	//res.render('fs');
};