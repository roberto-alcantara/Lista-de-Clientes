angular.module("app").service("ajax", function($http) {

	this.get = function (url, callback, config) {
		$http.get(url, config)
		.then(response => {
			callback({success: response});
		}, error => {
			callback({error: error});
		});
	};
	this.post = function (url, data, callback, config) {
		$http.post(url, data, config)
		.then(response => {
			callback({success: response});
		}, error => {
			callback({error: error});
		});
	};
	this.put = function (url, data, callback, config) {
		$http.put(url, data, config)
		.then(response => {
			callback({success: response});
		}, error => {
			callback({error: error});
		});
	};
	this.delete = function (url, callback, config) {
		$http.delete(url, config)
		.then(response => {
			callback({success: response});
		}, error => {
			callback({error: error});
		});
	};

	this.getEstadosCidades = function (val) {
		return $http.get("/data/estados-cidades.json")
	};
});