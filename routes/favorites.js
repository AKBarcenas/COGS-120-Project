var data = require('../data/restaurants.json');

exports.view = function(req, res){
	console.log(data);
	res.render('favorites', data);
};


function myFunction() {
	console.log("in my function");
	$("#deleteBtn").click(function(e) {
		$('#deleteBtn').text("Javascript is connected");
	});
}

/*function initializePage() {
	$("#deleteBtn").click(function(e) {
		$('#deleteBtn').text("Javascript is connected");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}

/*The selected answer would work for as long as you know the key itself that you want to delete but if it should be truly dynamic you would need to use the [] notation instead of the dot notation.

For example:

var keyToDelete = "key1";
var myObj: {"test": {"key1": "value", "key2": "value"}}

delete myObj.test.keyToDelete //would not work.
instead you would need to use:

delete myObj.test[keyToDelete];
Substitute the dot notation with [] notation for those values that you want evaluated before being deleted.*/