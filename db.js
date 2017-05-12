const mysql= require('mysql');

let db = null;

module.exports = (app) => {

	if(!db) {
		const config = app.config.db;
		db = mysql.createConnection({
		  host: config.host,
		  user: config.user,
		  password : config.password,
		  database: config.database
		});
	}
	return db;
}