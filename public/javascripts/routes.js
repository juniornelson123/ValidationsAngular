angular.module("validations").config(function($routeProvider) {
	$routeProvider.when("/", {
		templateURL: "/partials/index.ejs",
		controller: "indexController"	
	})

	$routeProvider.otherwise("/")
})