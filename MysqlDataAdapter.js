/**
 * @author Sachintha
 */
var mysql = require('mysql');

var client = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'sith'
});
exports.insertVote = function(eventId,userId,vote){
	//client.connect();
 
// Create exhibit.
console.log(userId);
	var sql = 'INSERT INTO event_percep (EventId,UserId,Vote) VALUES (?,?,?)';
 
  	client.query(sql, [eventId,userId,vote]);
  //	client.end();
}

exports.insertUser = function(req){
	
}
