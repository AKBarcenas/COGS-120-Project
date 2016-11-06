var data = require('../data.json');
var fs = require('fs');

exports.view = function(req, res){
	res.render('chat');	
	//res.render('favorites', data);
	//res.render('fs');
};