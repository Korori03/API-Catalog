'use strict';

var con = require('../../config/db');

var VideosPercent = function(videos){
	this.name = videos.name;
	this.type = videos.type;
	this.release_date = videos.release_date;
	this.usa = videos.usa;
	this.japan = videos.japan;
	this.europe = videos.europe;
	this.asia = videos.asia;
	this.australia = videos.australia;
	this.finished = videos.finished;
	this.total = videos.total;
	this.userid = videos.userid;
	this.percentage = videos.percentage;
	
};

// Calls VideosGroup(_userid);
VideosPercent.findAllPercent = function (item, result) {
	let data = [item.userid];
	let sql = 'Call VideosGroup(?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

// Calls VideosTotal(_userid);
VideosPercent.findAllTotal = function(item, result){
    let data = [item.userid];
	let sql = 'Call VideosTotal(?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};


// Calls VideosTypePercent(_type,_userid);
VideosPercent.findTypePercent = function(item, result){
	let data = [item.type, item.userid];
	let sql = 'Call VideosTypePercent(?,?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

module.exports = VideosPercent;
