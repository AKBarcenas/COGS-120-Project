var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('favorites', data);
};
/*exports.view	=	function(req,	res){	
		res.render('favorites',	{	
			'projects':[
				{'name':	'Waiting	in	Line',	
				'image':	'lorempixel.people.1.jpeg',	
				'id':	'project1'
			},
				{'name':	'Needfinding',	
				'image':	'lorempixel.city.1.jpeg',	
				'id':	'project2'},
				{'name':	'	in	Line',	
				'image':	'lorempixel.people.1.jpeg',	
				'id':	'project3'},			
			]	
		});
};*/