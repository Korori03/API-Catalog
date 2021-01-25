'use strict';

var con = require('./../../config/db');

// Games Object
var BooksSearch = function(books){
	this.id = books.id;
	this.name = books.name;
	this.variant = books.variant;
	this.author = books.author;
	this.publisher = books.publisher;
	this.release_date = books.release_date;
	this.rating = books.rating;
	this.genre = books.genre;
	this.region = books.region;
	this.finished = books.finished;
	this.barcode = books.barcode;
	this.type = books.type;
	this.userid = books.userid;
	this.search = books.search;
};


// Calls GamesBrandLetter(_type,_letter,_userid);
BooksSearch.BooksTypeSearch = function(item, result){
	let data = [item.brand, item.search, item.userid];
	let sql = 'Call BooksTypeSearch(?,?,?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

// Calls BooksSearch(_letter,_userid);
BooksSearch.BooksSearch = function(item, result){
	let data = [item.search, item.userid];
	let sql = 'Call BooksSearch(?,?)';
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};
module.exports = BooksSearch;
