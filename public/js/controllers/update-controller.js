angular.module("app").controller("updateCtrl", function($scope, Client, ajax, croppie, $stateParams, $state) {

	$scope.formTipo = "Editar";

	ajax.getEstadosCidades().then(response => {
		$scope.estadosCidades = response.data;
	});

	$scope.client = new Client();

	Client.getDados($stateParams.clientId, response => {
		console.log(response);
		if (response.success) {
			if (response.success.data.length)
				angular.extend($scope.client, response.success.data[0]);
			else
				$state.go("home");
		}
		else
			$state.go("home");
	});

	$scope.salvar = function() {
		$scope.client.editar(response => {
			if (response.success) {
				alert("Dados gravados com sucesso!");
				$state.go("home");
			}
			else {
				var err = response.error.data;
				if (err.code === "ER_DUP_ENTRY") {
					if (err.key === "cpf")
						alert("Erro: CPF já cadastrado!")
					if (err.key === "email")
						alert("Erro: EMAIL já cadastrado!")
				}
				alert("Erro ao gravar os dados!");
			}
		});
	}

	var clientFoto = "#picture-modal";
	//criando e alterando foto com croppie para recortar a imagem
	$scope.$watch('foto', function (newVal, oldVal) {
		if (!oldVal && newVal) {
			croppie.create(clientFoto, {
				viewport: {
					width: 300,
					height: 300,
					type: 'square'
				},
				boundary: {
					width: 300,
					height: 300
				},
				url: $scope.foto,
			});
		}
		else if (oldVal && newVal) {
			croppie.bind(clientFoto, {
				url: $scope.foto
			});
		}
	}, true);

	//Define a foto
	$scope.selecionarFoto = function (res) {
		if (!res) {
			$scope.client.foto = undefined;
			$scope.foto = undefined;
			croppie.destroy(clientFoto);
		}
		else {
			croppie.result(clientFoto, {
	            type: 'base64',
	            format: 'png'
       		}).then(function (data) {
				$scope.client.foto = data;
				$scope.$apply();
			});
		}
	};
});