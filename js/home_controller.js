app.controller('HomeController', HomeController);

HomeController.$inject = ['$scope', '$rootScope','$http', 'localStorageService'];

function HomeController($scope, $rootScope,	$http, localStorageService) {
	var vm = this;
	
	vm.personList = localStorageService.get('list');

	vm.updateList = function()
	{
		$http.get('/persons').success(
			function(data, status, headers, config) {
				vm.personList = data;
				localStorageService.set('list', vm.personList);
			}).
			error(function(data, status, headers, config) {
				console.log("Error: unable to contact idlab engine.");
			});	
	}
}