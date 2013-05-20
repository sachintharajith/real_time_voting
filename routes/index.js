/*
 * GET home page.
 */

var utils = require('../utils'), 
	config = require('../config'), 
	events = require('../events'),
	fs = require('fs'),
	stats = require('../stats');
	//sqladapter = require('../MySqlDataAdapter');

/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index.html');
};

exports.percep_event = function(req, res) {
	res.render('percep_event.hjs');
};
/*
 * POST new vote via SMS
 */
exports.post_percep = function(req, res) {
	//res.render('percep_event.hjs',res.value);
	//var __vote = req.param('vote');
	/*
	sqladapter.insertVote("1", req.body.userId, req.body.vote);
	stats.sendUpdate(req,res);
	res.render('percep_event.hjs', {
		vote : req.body.vote,
		id : req.body.userId
	});
	*/
	
	socket.emit('message', { message: 'Graph data stream new data!'});
};

exports.percep_event_graph_data = function(req, res){
	stats.getGraphData(req,res);
}
exports.percep_event_graph = function(req, res) {
	res.render('percep_event_graph.html');
};

