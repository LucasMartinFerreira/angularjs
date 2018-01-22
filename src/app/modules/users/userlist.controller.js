(function() {
  'use strict';

  angular
    .module('angularjs')
    .controller('UserlistController', userlistController);

  /** @ngInject */
  function userlistController( $scope, $http,$window, userlistService) {
    var vm = this;
	
	$scope.buttonvisible = true;
	
	userlistService.obtainListUsers();
	
	this.getUsers = function(){
		
		$http({
		  method: 'GET',
		  url: 'https://jsonplaceholder.typicode.com/users'
		}).then(function successCallback(response) {
			$scope.existResults = true;
			$scope.userListResult = response.data;
		  }, function errorCallback(response) {
			console.log('Fallo obteniendo los usuarios :-S', error);
		  });
		  
	}
	
	this.getUsers();
	
	
	this.onAddClicked = function(){
		window.location.href = '/#/users/add';
	}
  }
  
})();

