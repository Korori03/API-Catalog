'use strict';

const mysql = require('mysql');

var con = mysql.createConnection({
	host: 'db',
	user: 'root',
	password: 'root',
	database: 'catalog'
},
{ flags: '-FOUND_ROWS' }
);

con.connect(function(err) {
	if (err) throw err;
	console.log("Connected to MySQL!");
});

module.exports = con;
