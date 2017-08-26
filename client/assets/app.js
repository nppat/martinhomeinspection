var app = angular.module('app', ['ngRoute']);

// Set up routes and controllers
app.config(['$routeProvider', '$locationProvider', function($routeProvider,  $locationProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'partials/main.html'
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
		.when('/sitemap.xml', {
			templateUrl: 'partials/sitemap.xml'
		})
		.otherwise({
            redirectTo: '/home'
         });

		$locationProvider.hashPrefix('!');
}]);
