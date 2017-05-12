module.exports = (app) => {
	app.db.connect((err) => {
		if (!err) {
			console.log("Conectado ao banco de dados!");
			app.listen(app.get('port'), () => {
		   	 console.log('\nServidor [ON]');
			});
		}
		else
			console.log('\nErro ao conectar ao banco de dados');
	});
}