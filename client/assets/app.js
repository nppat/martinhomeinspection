var app = angular.module('app', ['ngRoute']);

// Set up routes and controllers
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'partials/main.html',
			controller: 'BackgroundController'
		})
		.when('/about', {
			templateUrl: 'partials/about.html'
		})
		.when('/contact', {
			templateUrl: 'partials/contact.html'
		})
		.when('/qualifications', {
			templateUrl: 'partials/qualifications.html'
		})
		.when('/inspection', {
			templateUrl: 'partials/inspection.html'
		})
		.otherwise({
            redirectTo: '/home'
         });
}]);
