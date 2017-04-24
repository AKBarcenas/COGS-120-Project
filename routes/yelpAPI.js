const yelp = require('yelp-fusion');

const clientId = 'KXC96infFDZ2iOOox_LLbg';
const clientSecret = 'eP6r7DHPtsnfQp9DltHDuQyN4ENFk1y71E1VBWfXX0B9DjXAVeoeWctji0ECc58i';

exports.getRestaurants = function(req, res)  {
	var food = req.query.food;

	const searchRequest = {
	  term: food,
	  location: 'san francisco, ca'
	};

	yelp.accessToken(clientId, clientSecret).then(response => {
	  const client = yelp.client(response.jsonBody.access_token);

	  client.search(searchRequest).then(response => {
	    const firstResult = response.jsonBody.businesses[0];
	    const prettyJson = JSON.stringify(firstResult, null, 4);
	    console.log(prettyJson);
	  });
	}).catch(e => {
	  console.log(e);
	});

	res.status(200).json(firstResult);
}