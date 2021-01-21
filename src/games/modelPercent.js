'use strict';

var con = require('./../../config/db');

var GamesPercent = function(games){
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
};

GamesPercent.findAllPercent = function(item, result){
    let data = [item.userid];
	let sql = 'Call GamesPercent(?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

GamesPercent.findAllTotal = function(item, result){
    let data = [item.userid];
	let sql = 'Call GamesTotal(?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};



GamesPercent.findBrandsPercent = function(item, result){
	let data = [item.brand, item.userid];
	let sql = 'Call GamesBrandPercent(?,?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

GamesPercent.findSystemsPercent = function(item, result){
	let data = [item.brand, item.system, item.userid];
	let sql = 'Call GamesSystemPercent(?,?,?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

module.exports = GamesPercent;
