/**
 * @author Sachintha
 */
var config = {};

config.couchdb = {};
config.twilio = {};
config.mysql = {};
config.couchdb.url = 'https://couchserver';
config.couchdb.port = 443;
config.couchdb.username = 'sachintha';
config.couchdb.password = 'srpuom@8912';

//configuration for mysql database
config.mysql.host = 'localhost';
config.mysql.username = 'root';
config.mysql.password = '';


config.twilio.sid = 'AC04d35a7e20fe8028f12b91f166766679';
config.twilio.key = '74fbf014f0c903ebd3a64e7d89982967';
//twilio number = '(401) 354-1988'
module.exports = config;