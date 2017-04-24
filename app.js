
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var project = require('./routes/project');
var preferences = require('./routes/preferences');
var chat = require('./routes/chat');
var profile = require('./routes/profile');
var login = require('./routes/login');
var favorites = require('./routes/favorites');
var preferences2 = require('./routes/preferences2');

var add = require('./routes/add');

var newchat = require('./routes/newchat');
var about = require('./routes/about');

var foodPlace = require('./routes/foodPlace');
var set = require('./routes/set');
var yelp = require('./routes/yelp');

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key')); //lol what does this do
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/preferences', preferences.view);
app.get('/altpreferences', preferences.viewAlt);
app.get('/profile', profile.view);
app.get('/chat', chat.view);
app.get('/login', login.view);
app.get('/favorites', favorites.view);
app.get('/preferences2', preferences2.view);
app.get('/add', add.addFavorite);
app.get('/foodplace', foodPlace.getFoodPlace);
app.get('/set', set.setPreference);
app.get('/get', set.getPreference);


app.get('/newchat', newchat.view);
app.get('/about', about.view);
app.get('/yelp', yelp.getRestaurants);


var server = http.createServer(app).listen(app.get('port'), function(){

  var io = require('socket.io').listen(server);

	io.on('connection',function(socket){
    socket.on('chat message', function(msg) {
	//console.log('message: ' + msg);
	// working one io.emit('chat message',msg);
	io.emit('chat message',msg);
	console.log('Socket.IO: Message Sent');
    });
});


  console.log('Express server listening on port ' + app.get('port'));
});
