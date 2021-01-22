'use strict';

var con = require('./../../config/db');

// Games Object
var Books = function(books){
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
};

// Calls BooksList(_userid);
Books.findList = function (item, result) {
	let data = [item.userid];
	let sql = 'call BooksList(?);';
	console.log(sql);
	con.query(sql, data,(err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

// Calls BooksTotal(_userid);
Books.findTotal = function (item, result) {
	let data = [item.userid];
	let sql = 'call BooksTotal(?);';
	console.log(sql);
	con.query(sql, data,(err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

// Calls BooksType(_type,_userid);
Books.findType = function(item, result){
	let data = [item.type, item.userid];
	let sql = 'Call BooksType(?, ?)';
	console.log(sql);
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, row[0]);
	});
};

// Calls BooksInfo(_type,_item,_userid);
Books.findBook = function (item, result) {
	let data = [item.type,item.id, item.userid];
	let sql = 'Call BooksInfo(?,?,?)';
	console.log(sql);
	con.query(sql, data, (err, rows, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		result(null, rows[0]);
	});
};

module.exports = Books;

