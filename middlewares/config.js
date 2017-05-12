const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

module.exports = (app) => {

	app.set('port', process.env.PORT || 1800);
	app.set('views', path.join(__dirname, '../views'));
	app.set('view engine', 'ejs');
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json({limit: '50mb'}));
	app.use(express.static(path.join(__dirname, '../public')));

}