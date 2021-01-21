'use strict';

var con = require('../../config/db');

var MusicPercent = function(music){
	this.name = music.name;
	this.type = music.type;
	this.release_date = music.release_date;
	this.usa = music.usa;
	this.japan = music.japan;
	this.europe = music.europe;
	this.asia = music.asia;
	this.australia = music.australia;
	this.finished = music.finished;
	this.total = music.total;
	this.userid = music.userid;
	this.percentage = music.percentage;
	
};

// Calls MusicGroup(_userid);
MusicPercent.findAllPercent = function(item, result){
    let data = [item.userid];
	let sql = 'Call MusicGroup(?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

// Calls MusicTotal(_userid);
MusicPercent.findAllTotal = function(item, result){
    let data = [item.userid];
	let sql = 'Call MusicTotal(?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};


// Calls MusicTypePercent(_type,_userid);
MusicPercent.findTypePercent = function(item, result){
	let data = [item.type, item.userid];
	console.log(data);
	let sql = 'Call MusicTypePercent(?,?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

module.exports = MusicPercent;
