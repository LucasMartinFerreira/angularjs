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

  	//controla que se muestre un texto en rojo si alguno de los campos no ha sido informado.
    this.showRedMessage=false;
    this.showAdd = false;
    this.showUpdate = false;

   if($location.path()===URL.addUser){
      console.log('Añadir nuevo usuario.');
      //modelo donde almacenamos los datos del formulario.
      this.user = {};
      this.showAdd = true;



   }else if($location.path().indexOf(URL.updateUser) !==-1){
      console.log('Actualizar usuario.');
      this.showUpdate = true;

   }


    /**
    * Función que es llamada cuando el usuario pulsa el botón de "añadir"
    **/
    this.addUser = function (){
       
   		console.log('[UserController] Inicio funcion addUser ');

   		if(usersService.validateUserFields(this.user)){

   			console.log('Todos los campos han sido informados.');

   			//ocultamos el texto de error
   			this.showRedMessage=false;

   			//realizamos la llamada al servicio.
        usersService.addUser(this.user).then(function(response){
         
          console.log('response', response);

        });      
        
        
   		}else{
   			console.log('Alguno o ninguno de los campos ha sido informado.');
   			this.showRedMessage=true;
   		}

   		console.log('[UserController] Fin funcion addUser ');

    };


    this.updateUser = function(){



    };

 	console.log('[UserController] Fin controlador:  UserController');


  }//end controller.
 

})();