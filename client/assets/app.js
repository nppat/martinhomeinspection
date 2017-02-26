var app = angular.module('app', ['ngRoute']);

// Set up routes and controllers
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'partials/main.html' 
		})
		.otherwise({
            redirectTo: '/home'
         });
}]);