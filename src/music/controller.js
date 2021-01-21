'use strict';
const Music = require('./model');

// Calls MusicList(_userid);
exports.findAll = function(req, res) {
	const newItem = new Music(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.userid) {		
		return res.status(400).send('User ID not provided')
	} else {	
		Music.findAll(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}
};

// Calls MusicType(_type,_userid);
exports.findType = function(req, res) {
	const newItem = new Music(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.type || !newItem.userid) {		
		return res.status(400).send('Type or User ID not provided')
	} else {		
		Music.findType(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}	
};


// Calls MusicItemSelection(_type,_item,_userid);
exports.findItem = function(req, res) {
	const newItem = new Music(req.body);
	
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.type|| !newItem.id || !newItem.userid) {		
		return res.status(400).send('Item or Brand or System or User ID not provided')
	} else {		
		Music.findItem(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}	
};


const MusicPercent = require('./modelPercent');

// Calls GamesPercent(_userid);
exports.findAllPercent = function(req, res) {
	const newItem = new MusicPercent(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.userid) {		
		return res.status(400).send('User ID not provided')
	} else {	
		MusicPercent.findAllPercent(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}
};


// Calls GamesPercent(_userid);
exports.findAllTotal = function(req, res) {
	const newItem = new MusicPercent(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.userid) {		
		return res.status(400).send('User ID not provided')
	} else {	
		MusicPercent.findAllTotal(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}
};

// Calls GamesBrandPercent(_brand,_userid);
exports.findTypePercent = function(req, res) {
	const newItem = new MusicPercent(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing1');
	} if (!newItem.type || !newItem.userid) {		
		return res.status(400).send('Brand or User ID not provided')
	} else {		
		MusicPercent.findTypePercent(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}	
};
