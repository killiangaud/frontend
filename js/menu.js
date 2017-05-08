var app = angular.module("idlabfront", ["ngRoute","LocalStorageModule"]);
app.config(function($routeProvider) {
	$routeProvider.
		when("/", {
			templateUrl: "templates/home.html",
		});
})
.config(['localStorageServiceProvider', function(localStorageServiceProvider){
	localStorageServiceProvider.setPrefix('idlab')
}])