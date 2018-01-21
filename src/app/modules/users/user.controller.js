(function() {
  'use strict';

 //añadimos el controlador al modulo de nuestra aplicación.
  angular
    .module('angularjs')   
    .controller('UserController', UserController);


  /**
  * Función que tendra la comunicación con la vista.
  * @param Servicio inyectadi para la petición http de creación de usuario.
  **/
  function UserController(usersService, $location, URL) {
   
    console.log('[UserController] Inicio controlador:  UserController');

    var vm = this;


  	//controla que se muestre un texto en rojo si alguno de los campos no ha sido informado.
    vm.showRedMessage=false;
    vm.showAdd = false;
    vm.showUpdate = false;

    //modelo donde almacenamos los datos del formulario.
    vm.user = {};

   if($location.path()===URL.addUser){
      console.log('Añadir nuevo usuario.');
     
      vm.showAdd = true;

   }else if($location.path().indexOf(URL.updateUser) !==-1){
      console.log('Actualizar usuario.');
      vm.showUpdate = true;

      usersService.findUserById(1).then(function(response){
         
         console.log('Respuesta busqueda por id de usuario ', response);
         vm.user = response;
        

      }).catch(function(err) {
            console.log('Error buscando el usuario por id: ', err);
      });  

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
         
          console.log('Respuesta creación de usuario: ', response);

        }).catch(function(err) {
            console.log('Error buscando el usuario por id: ', err);
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

        vm.user.id =1;

        //realizamos la llamada al servicio.
        usersService.updateUser(vm.user).then(function(response){
         
          console.log('Respuesta actualización', response);

        }).catch(function(err) {
            console.log('Error buscando el usuario por id: ', err);
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