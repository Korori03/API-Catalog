'use strict';

var con = require('./../../config/db');


var Games = function(games){
	this.id = games.id;
	this.brand = games.brand;
	this.system = games.system;
	this.developer = games.developer;
	this.publisher = games.publisher;
	this.release_date = games.release_date;
	this.rating = games.rating;
	this.genre = games.genre;
	this.region = games.region;
	this.playmode = games.playmode;
	this.download = games.download;
	this.vr = games.vr;
	this.finished = games.finished;
	this.barcode = games.barcode;
	this.cover = games.cover;
	this.instructions = games.instructions;
	this.box = games.box;
	this.steelbook = games.steelbook;
	this.userid = games.userid;
};

// Calls GamesList(_userid);
Games.findAll = function (item, result) {
	let data = [item.userid];
	let sql = 'Call GamesList(?)';
	con.query(sql, data,(err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

// Calls GamesTotal(_userid);
Games.findAllTotal = function (item, result) {
	let data = [item.userid];
	let sql = 'Call GamesTotal(?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};
// Calls GamesPercent(_userid);
Games.findAllPercent = function (item, result) {
	let data = [item.userid];
	let sql = 'Call GamesPercent(?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

// Calls GamesBrand(_brand,_userid);
Games.findBrands = function(item, result){
	let data = [item.brand, item.userid];
	let sql = 'Call GamesBrand(?, ?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row);
	});
};

// Calls GamesBrandPercent(_brand,_userid);
Games.findBrandsPercent = function(item, result){
	let data = [item.brand, item.userid];
	let sql = 'Call GamesBrand(?, ?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row);
	});
};


// Calls GamesSystem(_brand,_system,_userid);
Games.findSystems = function(item, result){
	let data = [item.brand, item.system, item.userid];
	let sql = 'Call GamesSystem(?, ?, ?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};
	
// Calls GamesInfo(_brand,_system,_item,_userid);
Games.findGame = function (item, result) {
	let data = [item.brand, item.system, item.id,item.userid];
	let sql = 'Call GamesInfo(?,?,?,?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};





module.exports = Games;

