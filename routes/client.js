module.exports = (app) => {

	app.route('/client/dados')
	.get((req, res) => {
		app.db.query('SELECT * FROM client', function(err, result) {
			if (!err) {
				console.log(result);
				res.status(200).json(result);
			}
			else {
				console.log(err);
				res.status(412).json(err);
			}
		});
	})
	.post((req, res) => {
		var obj = req.body;
		var foto = obj.foto;
		delete obj.foto;
		obj.data_nascimento = obj.data_nascimento.slice(0, 10);
		obj.created_at = new Date().toISOString().slice(0, 10);
		var keys = Object.keys(obj);
		var values = keys.map((key) => obj[key]);
		app.db.query('INSERT INTO client ('+keys.join(', ')+') VALUES ?', [[values]], function(err, result) {
			if (!err) {
				console.log(result);
				var valueFoto = [result.insertId, foto];
				app.db.query('INSERT INTO foto_client (id_client, foto) VALUES ?', [[valueFoto]]);
				res.status(200).json(result);
			}
			else {
				var keyError = err.message.split(' ');
				keyError = keyError[keyError.length-1].replace(/'/g, '');
				err.key = keyError;
				res.status(412).json(err);
			}
		});
	});

	app.route('/client/dados/:id')
	.get((req, res) => {
		app.db.query('SELECT * FROM client INNER JOIN foto_client ON id=id_client WHERE id='+req.params.id, function(err, result) {
			if (!err) {
				delete result[0].id_client;
				res.status(200).json(result);
			}
			else {
				console.log(err);
				res.status(412).json(err);
			}
		});
	})
	.put((req, res) => {
		var obj = req.body;
		var foto = obj.foto;
		delete obj.foto;
		obj.data_nascimento = obj.data_nascimento.slice(0, 10);
		obj.created_at = new Date().toISOString().slice(0, 10);

		values = JSON.stringify(obj).replace(/\{|\}/g,'').replace(/":/g, '=').replace(/,"/g, ', ').replace('"', '');

		app.db.query('UPDATE client SET '+values+' WHERE id='+req.params.id, function(err, result) {
			if (!err) {
				console.log(result);
				app.db.query("UPDATE foto_client SET foto='"+foto+"' WHERE id_client="+req.params.id);
				res.status(200).json(result);
			}
			else {
				console.log(err);
				res.status(412).json(err);
			}
		});
	})
	.delete((req, res) => {
		app.db.query('DELETE FROM client WHERE id='+req.params.id, function(err, result) {
			if (!err) {
				console.log(result);
				res.status(200).json(result);
			}
			else {
				console.log(err);
				res.status(412).json(err);
			}
		});
	});
};