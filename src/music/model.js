'use strict';

var con = require('../../config/db');


var Music = function(music){
	this.id = music.id;
	this.name = music.name;
	this.publisher = music.publisher;
	this.region = music.region;
	this.barcode = music.barcode;
	this.genre = music.genre;
	this.completed = music.completed;
	this.release_date = music.release_date;
	this.userid = music.userid;
	this.type = music.type;
};

// Calls MusicList(_userid);
Music.findAll = function (item, result) {
	let data = [item.userid];
	let sql = 'Call MusicList(?)';
	con.query(sql, data,(err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

// Calls MusicTotal(_userid);
Music.findAllTotal = function (item, result) {
	let data = [item.userid];
	let sql = 'Call MusicTotal(?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};
// Calls MusicGroup(_userid);
Music.findAllPercent = function (item, result) {
	let data = [item.userid];
	let sql = 'Call MusicGroup(?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

// Calls MusicType(_brand,_userid);
Music.findType = function(item, result){
	let data = [item.type, item.userid];
	let sql = 'Call MusicType(?, ?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

// Calls MusicTypePercent(_brand,_userid);
Music.findTypePercent = function(item, result){
	let data = [item.type, item.userid];
	let sql = 'Call MusicTypePercent(?, ?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};


	
// Calls MusicItemSelection(_type,_item,_userid);
Music.findItem = function (item, result) {
	let data = [item.type, item.id,item.userid];
	let sql = 'Call MusicItemSelection(?,?,?)';
	console.log(sql);
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

module.exports = Music;

