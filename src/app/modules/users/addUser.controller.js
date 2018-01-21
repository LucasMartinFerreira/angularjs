(function() {
  'use strict';

 //añadimos el controlador al modulo de nuestra aplicación.
  angular
    .module('angularjs')   
    .controller('AddUserController', AddUserController);


  /**
  * Función que tendra la comunicación con la vista.
  * @param Servicio inyectadi para la petición http de creación de usuario.
  **/
  function AddUserController(usersService) {
   
    console.log('[AddUserController] Inicio controlador:  AddUserController');

  	//controla que se muestre un texto en rojo si alguno de los campos no ha sido informado.
    this.show=false;

    //modelo donde almacenamos los datos del formulario.
    this.user = {};



    /**
    * Función que es llamada cuando el usuario pulsa el botón de "añadir"
    **/
    this.addUser = function (){
       
   		console.log('[AddUserController] Inicio funcion addUser ');

   		if(usersService.validateUserFields(this.user)){

   			console.log('Todos los campos han sido informados.');

   			//ocultamos el texto de error
   			this.show=false;

   			//realizamos la llamada al servicio.
        usersService.addUser(this.user).then(function(response){
         
          console.log('response', response);

        });      
        
        
   		}else{
   			console.log('Alguno o ninguno de los campos ha sido informado.');
   			this.show=true;
   		}

   		console.log('[AddUserController] Fin funcion addUser ');

    };

 	console.log('[AddUserController] Fin controlador:  AddUserController');


  }//end controller.
 

})();