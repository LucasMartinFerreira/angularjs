(function() {
  'use strict';

  angular
    .module('angularjs')
    .controller('UserlistController', userlistController);

  /** @ngInject */
  function userlistController($location, userlistService, serviceGetterAndSetterUsers, ModalsService,$stateParams) {
    var vm = this;
	
	var temporalUserList;
	
	var objectUser = $stateParams.objectUser;
	
    var action = $stateParams.action;


	vm.existResults = false;
		
	vm.getUsers = function(){
		
		console.log('[userlistController] obteniendo usuarios');
		
		userlistService.obtainListUsers().then(function(response){
		  vm.existResults = true;
		  serviceGetterAndSetterUsers.set(response[0].data);
		  vm.userListResult =  serviceGetterAndSetterUsers.get();
		});
		
	}
		
	vm.onAddClicked = function(){
		console.log('Userlist: Añadir nuevo User')
		ModalsService.viewModalAddUser();
	}
	
	vm.onEditClicked = function(user){
	
	  console.log('Userlist: Editamos el User con Id:', user.id)
	  var data ={
		user : user
	  }
	  ModalsService.viewModalEditUser(user)
		
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
	
	/**
	* al usar un servicio dummy, no se borran realmente los datos, para que se refleje en la pantalla los actualizamos en el listado local
	*/
	vm.updateOrAddUser = function(userUpdated, action){
		
		var userList = serviceGetterAndSetterUsers.get();
		if(action == "edit"){
			var index = -1;
			for(var i=0; i<userList.length; i++){
				var user = userList[i];
				if(user.id == userUpdated.id){
					index = i;
					break;
				}
			}
			if(index >= 0){
				userList[index] = userUpdated;
				serviceGetterAndSetterUsers.set(userList);
			}
		}else if(action == "add"){
			userList.push(userUpdated);
			serviceGetterAndSetterUsers.set(userList);
		}
		
		vm.userListResult = serviceGetterAndSetterUsers.get();
		
	}
	
	if(action == null){
		vm.getUsers();
	}else{
		vm.updateOrAddUser(objectUser, action);
	}
	
	// Array Remove - By John Resig (MIT Licensed)
	Array.prototype.remove = function(from, to) {
	  var rest = this.slice((to || from) + 1 || this.length);
	  this.length = from < 0 ? this.length + from : from;
	  return this.push.apply(this, rest);
	};
  }
  
})();

