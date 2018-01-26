(function() {
  'use strict';

 //añadimos el controlador al modulo de nuestra aplicación.
  angular
    .module('angularjs')   
    .controller('UserController', UserController);


  /**
  * Función que tendra la comunicación con la vista.
  * @param Servicio inyectado para la petición http de creación de usuario.
  * @param Parametro data para el modal
  **/
  function UserController(data, usersService,$uibModalInstance,$state,toastr) {
   
    console.log('[UserController] Inicio controlador:  UserController');

    var vm = this;


  	//controla que se muestre un texto en rojo si alguno de los campos no ha sido informado.
    vm.showRedMessage=false;
    vm.showAdd = false;
    vm.showUpdate = false;

    //modelo donde almacenamos los datos del formulario.
    vm.user = {};

   if(null === data || ""===data){
      console.log('Añadir nuevo usuario.');
     
      vm.showAdd = true;

   }else if(null!== data && ""!==data){
      console.log('Actualizar usuario.');
      vm.showUpdate = true;

      //seteamos el usuario para precargarlo en el modal.
      vm.user = data;

   }

    vm.closeModal = function(){
      $uibModalInstance.dismiss();
    }


    /**
    * Función que es llamada cuando el usuario pulsa el botón de "añadir"
    **/
    vm.addUser = function (){
       
   		console.log('[UserController] Inicio funcion addUser ');

   		if(usersService.validateUserFields(vm.user)){

   			console.log('Todos los campos han sido informados.');

   			//ocultamos el texto de error
   			vm.showRedMessage=false;

   			//realizamos la llamada al servicio.
        usersService.addUser(vm.user).then(function(response){
         
          //respondemos con el resultado de la peticion y se lo enviamos al listado.
          var objUser =  response[0].data;
          console.log('Respuesta creación de usuario: ', objUser);

          //enviamos el resultado al listado.
          $state.transitionTo($state.current, {objectUser: objUser, action: 'add'}, { reload: true})
          toastr.success('Usuario creado correctamente');

          //cerramos el modal.
          vm.closeModal();
          
        }).catch(function(err) {

            console.log('Error buscando el usuario por id: ',response[0].err);

            vm.closeModal();

        });     
        
        
   		}else{
   			console.log('Alguno o ninguno de los campos ha sido informado.');
   			vm.showRedMessage=true;
   		}

   		console.log('[UserController] Fin funcion addUser ');

    };


    /**
    * Función que se llama cuando el usuario pulsa el boton de "actualizar"
    **/
    vm.updateUser = function(){

      console.log('[UserController] Inicio funcion updateUser ');

      if(usersService.validateUserFields(vm.user)){

        console.log('Todos los campos han sido informados.');

        //ocultamos el texto de error
        vm.showRedMessage=false;

        //realizamos la llamada al servicio.
        usersService.updateUser(vm.user).then(function(response){
        
          //respuesta de la api 
          var objUser =  response[0].data;

          console.log('Respuesta actualización', objUser);

          //enviamos la respuesta.
          $state.transitionTo($state.current, {objectUser: objUser, action: 'edit'}, { reload: true})
          toastr.success('Usuario actualizado correctamente');

          vm.closeModal();

        }).catch(function(err) {
            console.log('Error buscando el usuario por id: ',response[0].err);

            vm.closeModal();

        });      
        
        
      }else{
        console.log('Alguno o ninguno de los campos ha sido informado.');
        vm.showRedMessage=true;
      }

      console.log('[UserController] Fin funcion updateUser ');
    };

 	console.log('[UserController] Fin controlador:  UserController');

  }//end controller.
 

})();