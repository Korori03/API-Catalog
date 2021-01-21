'use strict';
const Videos = require('./model');

// Calls VideosList(_userid);
exports.findAll = function(req, res) {
	const newItem = new Videos(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.userid) {		
		return res.status(400).send('User ID not provided')
	} else {	
		Videos.findAll(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}
};

// Calls VideosType(_brand,_userid);
exports.findType = function(req, res) {
	const newItem = new Videos(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.type || !newItem.userid) {		
		return res.status(400).send('Type or User ID not provided')
	} else {		
		Videos.findType(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}	
};


// Calls VideosItemSelection(_type,_item,_userid);
exports.findItem = function(req, res) {
	const newItem = new Videos(req.body);
	
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.type|| !newItem.id || !newItem.userid) {		
		return res.status(400).send('Item or Brand or System or User ID not provided')
	} else {		
		Videos.findItem(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}	
};


const VideosPercent = require('./modelPercent');

// Calls VideosGroup(_userid);
exports.findAllPercent = function(req, res) {
	const newItem = new VideosPercent(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.userid) {		
		return res.status(400).send('User ID not provided')
	} else {	
		VideosPercent.findAllPercent(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}
};


// Calls VideosTotal(_userid);
exports.findAllTotal = function(req, res) {
	const newItem = new VideosPercent(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.userid) {		
		return res.status(400).send('User ID not provided')
	} else {	
		VideosPercent.findAllTotal(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}
};

// Calls VideosTypePercent(_type,_userid);
exports.findTypePercent = function(req, res) {
	const newItem = new VideosPercent(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing1');
	} if (!newItem.type || !newItem.userid) {		
		return res.status(400).send('Brand or User ID not provided')
	} else {		
		VideosPercent.findTypePercent(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}	
};
