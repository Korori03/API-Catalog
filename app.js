var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();



var server = require('http').Server(app);

var port = process.env.PORT || 4000;

// to support JSON-encoded bodies
app.use(bodyParser.json())

// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }))


//Routes
var gamesRouter = require('./src/games/route'),
    booksRouter = require('./src/books/route'),
    musicRouter = require('./src/music/route'),
    videosRouter = require('./src/videos/route');

// using as middleware
app.use('/games', gamesRouter);
app.use('/books', booksRouter);
app.use('/music', musicRouter);
app.use('/videos', videosRouter);

// root path
app.get("/", (req, res, next) => {
	res.json("What's up?");
});

server.listen(port, () => {
    console.log('Listening on port: ' + port);
});