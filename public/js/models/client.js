angular.module("app").factory("Client", function (ajax) {
	
	var Client = function () {
		this.foto = null;
		this.cpf = null;
		this.sexo = null;
		this.nome = null;
		this.data_nascimento = null;
		this.email = null;
		this.endereco = null;
		this.cep = null;
		this.bairro = null;
		this.uf = null;
		this.cidade = null;
		this.telefone = null;
		this.celular = null;

		this.salvar = function (callback) {
			ajax.post("/client/dados", this, (response) => {
				callback(response);
			});
		};
		this.editar = function (callback) {
			ajax.put("/client/dados/"+this.id, this, (response) => {
				callback(response);
			});
		};
	}

	Client.getDados = function (id, callback) {
		ajax.get("/client/dados/"+id, (response) => {
			callback(response);
		});
	};
	Client.getTodos = function (callback) {
		ajax.get("/client/dados/", (response) => {
			callback(response)
		})
	};
	Client.excluir = function (id, callback) {
		ajax.delete("/client/dados/"+id, (response) => {
			callback(response)
		})
	}

	return Client;
});