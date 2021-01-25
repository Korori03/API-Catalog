'use strict';

var con = require('./../../config/db');

var GamesSearch = function(games){
	this.name = games.name;
	this.brand = games.brand;
	this.system = games.system;
	this.release_date = games.release_date;
	this.usa = games.usa;
	this.japan = games.japan;
	this.europe = games.europe;
	this.asia = games.asia;
	this.australia = games.australia;
	this.finished = games.finished;
	this.total = games.total;
	this.userid = games.userid;
	this.percentage = games.percentage;
	this.search	= games.search;
};

// Calls GamesSystemsLetter(_brand,_system,_letter,_userid);
GamesSearch.GamesSystemsLetter = function(item, result){
	let data = [item.brand, item.system,item.search, item.userid];
	let sql = 'Call GamesSystemsLetters(?,?,?,?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

// Calls GamesBrandLetter(_brand,_letter,_userid);
GamesSearch.GamesBrandLetter = function(item, result){
	let data = [item.brand, item.search, item.userid];
	let sql = 'Call GamesBrandLetter(?,?,?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

// Calls GamesLetter(_letter,_userid);
GamesSearch.GamesLetter = function(item, result){
	let data = [item.search, item.userid];
	let sql = 'Call GamesLetter(?,?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};
module.exports = GamesSearch;
