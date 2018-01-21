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

   		if(validateFields(this.user)){

   			console.log('Todos los campos han sido informados.');

   			//ocultamos el texto de error
   			this.show=false;

   			//creamos json con los datos introducidos en el formulario.
        var userJson = getFieldData(this.user);

        //realizamos la llamada al servicio.
        usersService.addUser(userJson).then(function(response){
         
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




/**********
	
	FUNCIONES PRIVADAS.

**********/

	/**
	* Validamos que todos los campos esten informados antes de realizar la petición.
	* @return boolean
	**/
  function validateFields(data){

   		console.log('Validando campos...');

   		var valid = true;

   		if(undefined===data.name || undefined===data.username || undefined==data.email || undefined===data.phone){
   			valid = false
   		}

      console.log('Campos validados. Son correctos? ', valid);

   		return valid;
  };

  /**
  * Función que obtiene los datos del usuario informados en el formulario
  * @param modelo del usuario.
  **/
  function getFieldData(userModel){


    return JSON.stringify(
          {
            name: userModel.name,
            username: userModel.username,
            email: userModel.email,
            phone: userModel.phone
          }
        );
  };