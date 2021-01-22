'use strict';
const Books = require('./model');

// Calls BooksList(_userid);
exports.findList = function(req, res) {
	const newItem = new Books(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.userid) {		
		return res.status(400).send('User ID not provided')
	} else {	
		Books.findList(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}
};

// Calls BooksTotal(_userid);
exports.findTotal = function(req, res) {
	const newItem = new Books(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.userid) {		
		return res.status(400).send('User ID not provided')
	} else {	
		Books.findTotal(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}
};

// Calls BooksType(_type,_userid);
exports.findType = function(req, res) {
	const newItem = new Books(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('1');
	} if (!newItem.type|| !newItem.userid) {		
		return res.status(400).send('Type or User ID not provided')
	} else {		
		Books.findType(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}	
};
// Calls BooksInfo(_type,_userid);
exports.findBook = function(req, res) {
	const newItem = new Books(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('1');
	} if (!newItem.type ||!newItem.id || !newItem.userid) {		
		return res.status(400).send('Type or User ID not provided')
	} else {		
		Books.findBook(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}	
};

const BooksPercent = require('./modelPercent');

// Calls BooksListPercent(_userid);
exports.findAllPercent = function(req, res) {
	const newItem = new BooksPercent(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.userid) {		
		return res.status(400).send('Type or User ID not provided')
	} else {	
		BooksPercent.findAllPercent(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}
};

// Calls BooksTypePercent(_type,_userid);
exports.findTypePercent = function(req, res) {
	const newItem = new BooksPercent(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.type || !newItem.userid) {		
		return res.status(400).send('Type or User ID not provided')
	} else {		
		BooksPercent.findTypePercent(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand2');
			return res.send(items);
		});
	}	
};

