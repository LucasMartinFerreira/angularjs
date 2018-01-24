(function() {
  'use strict';

  angular
    .module('angularjs')
    .controller('UserlistController', userlistController);

  /** @ngInject */
  function userlistController($location, userlistService, ModalsService) {
    var vm = this;
	
	var temporalUserList;
	
	vm.existResults = false;
		
	vm.getUsers = function(){
		
		console.log('[userlistController] obteniendo usuarios');
		
		userlistService.obtainListUsers().then(function(response){
		  vm.existResults = true;
		  temporalUserList = response[0].data;
		  vm.userListResult =  temporalUserList;
		});
		
	}
	
	vm.getUsers();
	
	vm.onAddClicked = function(){
		console.log('Userlist: Añadir nuevo User')
		ModalsService.viewModalAddUser();
	}
	
	vm.onEditClicked = function(userId){
	
	  console.log('Userlist: Editamos el User con Id:', userId)
	  var data ={
		id : userId
	  }
	  ModalsService.viewModalEditUser(data)
		
	}
	
	vm.onDeleteClicked = function(userId){
		console.log('Userlist: Borramos el User con Id:', userId)
		userlistService.deleteUser(userId).then(function(response){
			console.log("Userlist: usuario borrado del servicio");
			vm.deleteUserFromTemporalData(userId);
		});
	}
	
	/**
	* al usar un servicio dummy, no se borran realmente los datos, para que se refleje en la pantalla los eliminamos del listado local
	*/
	vm.deleteUserFromTemporalData = function(userId){
		var index = -1;
		for(var i=0; i<temporalUserList.length; i++){
			var user = temporalUserList[i];
			if(user.id == userId){
				index = i;
				break;
			}
		}
		if(index > 0){
			temporalUserList.remove(index);
		}
		vm.userListResult =  temporalUserList;
	}
	
	// Array Remove - By John Resig (MIT Licensed)
	Array.prototype.remove = function(from, to) {
	  var rest = this.slice((to || from) + 1 || this.length);
	  this.length = from < 0 ? this.length + from : from;
	  return this.push.apply(this, rest);
	};
  }
  
})();

