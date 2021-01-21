'use strict';

var con = require('./../../config/db');

var BooksPercent = function(books){
	this.name = books.name;
	this.type = books.type;
	this.release_date = books.release_date;
	this.usa = books.usa;
	this.japan = books.japan;
	this.europe = books.europe;
	this.asia = books.asia;
	this.australia = books.australia;
	this.finished = books.finished;
	this.total = books.total;
	this.userid = books.userid;
	this.percentage = books.percentage;
};

// Calls BooksListPercent(_userid);
BooksPercent.findAllPercent = function(item, result){
    let data = [item.userid];
	let sql = 'Call BooksPercentByType(?)';
	console.log(sql);
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

// Calls BooksTypePercent(_type,_userid);
BooksPercent.findTypePercent = function(item, result){
	let data = [item.type, item.userid];
	let sql = 'Call BooksTypePercent(?,?)';
	console.log(sql);
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

module.exports = BooksPercent;
