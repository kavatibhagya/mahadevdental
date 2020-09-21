/*  Mahadev Dental app initialization */

(function() {

var app = angular.module('mahadevDental', ['ngRoute']);

/* Configuring the Routes */

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when("/", {
		templateUrl: "partials/home.html",
		controller: "homeCtrl"
	})
	.when("/about", {
		templateUrl: "partials/about.html",
		controller: "homeCtrl"
	})
	.when("/services", {
		templateUrl: "partials/services.html",
		controller: "homeCtrl"
	})
	.when("/contact", {
		templateUrl: "partials/contact.html",
		controller: "homeCtrl"
	})
}]);

//app.controller('pageCtrl', homeController);

app.controller('homeCtrl', function($scope, $http) {
	console.log("Home Controller");
	$('.carousel').carousel({
        interval: 5000 //changes the speed
    });

	var onHomePageDataLoad = function(response) {
		console.log(response.data);
		$scope.pageData = response.data;
	};

	var onHomePageError = function () {
		$scope.error = "There is something wrong. Sorry for the inconvenience."
	};

	$http.get("../data/homepage.json").then(onHomePageDataLoad, onHomePageError);
});

}());