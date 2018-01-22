(function() {
  'use strict';

  angular
    .module('angularjs')
    .controller('UserlistController', userlistController);

  /** @ngInject */
  function userlistController($http, $location, userlistService) {
    var vm = this;
	
	vm.buttonvisible = false;
	
	userlistService.obtainListUsers();
	
	vm.getUsers = function(){
		
		console.log('[userlistController] obteniendo usuarios');
		
		userlistService.obtainListUsers().then(function(response){
		  vm.userListResult =  response[0].data;
		});
		
	}
	
	vm.getUsers();
	
	vm.onAddClicked = function(){
		$location.path('/users/add');
	}
  }
  
})();

