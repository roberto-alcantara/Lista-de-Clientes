angular.module("app").controller("homeCtrl", function ($scope, Client) {

	$scope.carregar = function() {
		Client.getTodos((response) => {
			if (response.success) {
				$scope.clients = response.success.data;
			}
			else $scope.clients = [];
		});	
	}

	$scope.excluir = function(id) {
		Client.excluir(id, function(response) {
			if (response.success) {
				alert("Excluído com sucesso!");
				$scope.carregar();
			}
			else
				alert("Erro ao excluir!");	
		});
	}
	$scope.carregar();
});