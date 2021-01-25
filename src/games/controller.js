'use strict';
const Games = require('./model');


// Calls GamesList(_userid);
exports.findAll = function(req, res) {
	const newItem = new Games(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.userid) {		
		return res.status(400).send('User ID not provided')
	} else {	
		Games.findAll(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}
};

// Calls GamesBrand(_brand,_userid);
exports.findBrands = function(req, res) {
	const newItem = new Games(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.brand || !newItem.userid) {		
		return res.status(400).send('Brand or User ID not provided')
	} else {		
		Games.findBrands(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}	
};

// Calls GamesSystem(_brand,_system,_userid);
exports.findSystems = function(req, res) {
	const newItem = new Games(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('1');
	} if (!newItem.brand || !newItem.system || !newItem.userid) {		
		return res.status(400).send('Brand or System or User ID not provided')
	} else {		
		Games.findSystems(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}	
};

// Calls GamesSystemsLetter(_brand,_system,_letter,_userid);
exports.findSystemsLetter = function(req, res) {
	const newItem = new Games(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('1');
	} if (!newItem.brand || !newItem.system || !newItem.system  || !newItem.userid) {		
		return res.status(400).send('Brand or System or User ID not provided')
	} else {		
		Games.findSystemsLetter(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}	
};




// Calls GamesInfo(_brand,_system,_item,_userid);
exports.findGame = function(req, res) {
	const newItem = new Games(req.body);
	console.log(newItem);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.brand ||!newItem.system || !newItem.id || !newItem.userid) {		
		return res.status(400).send('Item or Brand or System or User ID not provided')
	} else {		
		Games.findGame(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}	
};


const GamesPercent = require('./modelPercent');

// Calls GamesPercent(_userid);
exports.findAllPercent = function(req, res) {
	const newItem = new GamesPercent(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.userid) {		
		return res.status(400).send('User ID not provided')
	} else {	
		GamesPercent.findAllPercent(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}
};


// Calls GamesPercent(_userid);
exports.findAllTotal = function(req, res) {
	const newItem = new GamesPercent(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.userid) {		
		return res.status(400).send('User ID not provided')
	} else {	
		GamesPercent.findAllTotal(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}
};

// Calls GamesBrandPercent(_brand,_userid);
exports.findBrandsPercent = function(req, res) {
	const newItem = new GamesPercent(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing1');
	} if (!newItem.brand || !newItem.userid) {		
		return res.status(400).send('Brand or User ID not provided')
	} else {		
		GamesPercent.findBrandsPercent(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}	
};

// Calls GamesSystemPercent(_brand,_system,_userid);
exports.findSystemsPercent = function(req, res) {
	const newItem = new GamesPercent(req.body);
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newItem.brand ||!newItem.system || !newItem.userid) {		
		return res.status(400).send('Brand or User ID not provided')
	} else {		
		GamesPercent.findSystemsPercent(newItem, function(err, items) {
			console.log('err: ', err);
			if (err || items <= 0) return res.status(500).send('Error occured during grabing brand');
			return res.send(items);
		});
	}	
};

