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
		
		console.log('[userlistController] obteniendo usuarios');
		
		userlistService.obtainListUsers().then(function(response){
		  $scope.userListResult =  response[0].data;
		});
		
	}
	
	this.getUsers();
	
	this.onAddClicked = function(){
		window.location.href = '/#/users/add';
	}
  }
  
})();

