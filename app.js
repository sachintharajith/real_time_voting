
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();
app.engine('html', require('hjs').renderFile);
app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hjs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/percep_event', routes.percep_event);
app.get('/percep_event_graph', routes.percep_event_graph);
app.get('/stats',routes.percep_event_graph_data);
app.post('/post_percep', routes.post_percep);
//app.post('/percep/event', routes.voteSMS);
//app.post('/percep/topic',routes.topic);

var io = require('socket.io').listen(app.listen(app.get('port')));
io.sockets.on('connection', function (socket) {
	//console.log("**********" + io.sockets.clients().length)
	/*
	setInterval(function() {
		socket.emit('message', { message: 'Graph data stream'});
	}, 1000);
	*/
	socket.on('send', function (data) {
    	console.log(data);
        io.sockets.emit('message', data);
    });
	/*
	 
    socket.emit('message', { message: 'welcome to the chat'});
    
    io.sockets.emit('count', {count: io.sockets.clients().length});
    socket.on('disconnect', function () {
    io.sockets.emit('count', {count: io.sockets.clients().length});
  	});
    socket.on('send', function (data) {
    	console.log(data);
        io.sockets.emit('message', data);
    }); */
   
});
console.log("Express server listening on port " + app.get('port'));
/*
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
}); */