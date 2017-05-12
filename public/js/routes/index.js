angular.module("app").config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
	.state("home", {
    	url: "/",
    	templateUrl: "/views/index.html",
        controller: "homeCtrl"
	})
    .state("new", {
        url:"/new",
        templateUrl: "views/form-register.html",
        controller: "newCtrl"
    })
    .state("update", {
        url:"/update/{clientId}",
        templateUrl: "views/form-register.html",
        controller: "updateCtrl"
    })
    .state("details", {
        url:"/details/{clientId}",
        templateUrl: "views/details.html",
        controller: "detailsCtrl"
    });
	$locationProvider.hashPrefix("");
});