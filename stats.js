/**
 * @author Sachintha
 */


exports.getGraphData = function(req,res){
if (req.headers.accept && req.headers.accept == 'text/event-stream') {
	if (req.url == '/stats') {
		sendSSE(req, res);
	} else {
		res.writeHead(404);
		res.end();
	}
	} else {
		res.render('percep_event_graph.html');
	}
}	


function sendSSE(req, res) {
	res.writeHead(200, {
		'Content-Type' : 'text/event-stream',
		'Cache-Control' : 'no-cache',
		'Connection' : 'keep-alive'
	});

	var id = (new Date()).toLocaleTimeString();

	 //Sends a SSE every 5 seconds on a single connection.
	setInterval(function() {
		constructSSE(res, id, (new Date()).toLocaleTimeString(),Math.random());
	}, 5000);

	constructSSE(res, id, (new Date()).toLocaleTimeString(),Math.random());
}

function constructSSE(res, id, time,data) {
	res.write('event: graph\n');
	res.write('data: {\n');
	res.write('data: "id": "'+id+'",\n');
    res.write('data: "timeStamp": "'+time +'",\n');
    res.write('data: "value": "'+data+'"\n');
    res.write('data: }\n\n');
}

function debugHeaders(req) {
	sys.puts('URL: ' + req.url);
	for(var key in req.headers) {
		sys.puts(key + ': ' + req.headers[key]);
	}
	sys.puts('\n\n');
}

exports.sendUpdate = function(req,res){
	res.writeHead(200, {
		'Content-Type' : 'text/event-stream',
		'Cache-Control' : 'no-cache',
		'Connection' : 'keep-alive'
	});
	
	constructUpdate(res);
}

function constructUpdate(res) {
	res.write('event: update\n');
	res.write('data: {\n');
	res.write('data: "msg": "hello!",\n');
    res.write('data: }\n\n');
}

