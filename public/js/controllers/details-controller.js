angular.module("app").controller("detailsCtrl", function($scope, Client, $stateParams, $state) {

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

});