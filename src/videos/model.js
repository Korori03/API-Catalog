'use strict';

var con = require('../../config/db');


var Videos = function(videos){
	this.id = videos.id;
	this.name = videos.name;
	this.publisher = videos.publisher;
	this.region = videos.region;
	this.barcode = videos.barcode;
	this.genre = videos.genre;
	this.completed = videos.finished;
	this.release_date = videos.release_date;
	this.userid = videos.userid;
	this.type = videos.type;
};

// Calls VideosList(_userid);
Videos.findAll = function (item, result) {
	let data = [item.userid];
	let sql = 'Call VideosList(?)';
	con.query(sql, data,(err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};



// Calls VideosType(_brand,_userid);
Videos.findType = function(item, result){
	let data = [item.type, item.userid];
	let sql = 'Call VideosType(?, ?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

// Calls VideosItemSelection(_type,_item,_userid);
Videos.findItem = function (item, result) {
	let data = [item.type, item.id,item.userid];
	let sql = 'Call VideosItemSelection(?,?,?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

module.exports = Videos;

