(function() {
  'use strict';

  angular
    .module('angularjs')
    .controller('Page2Controller', Page2Controller);

  /**
  * Función que tendra la comunicación con la vista.
  * @param Servicio inyectadi para la petición http de creación de usuario.
  **/
  function Page2Controller(ServicePage2) {
   
    console.log('[Page2Controller] Inicio controlador:  Page2Controller');

  	//controla que se muestre un texto en rojo si alguno de los campos no ha sido rellenado.
    this.show=false;


    /**
    * Función que es llamada cuando el usuario pulsa el botón de "añadir"
    **/
    this.addUser = function (){
       
   		console.log('[Page2Controller] Inicio funcion addUser ');

   		if(validateFields(this)){

   			console.log('Todos los campos han sido informados.');

   			//ocultamos el texto de error
   			this.show=false;

   			//creamos json con los datos introducidos en el formulario.
        var userJson = JSON.stringify(
	   			{
			      name: this.name,
			      username: this.username,
			      email: this.email,
			      phone: this.phone,
			      userId: 1
			    }
			  );

   			console.log('userJson: ', userJson);

        ServicePage2.addUser();

   		}else{
   			console.log('Alguno o ninguno de los campos ha sido informado.');
   			this.show=true;
   		}

   		console.log('[Page2Controller] Fin funcion addUser ');

    };

 	console.log('[Page2Controller] Fin controlador:  Page2Controller');


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

   		console.log('Validando campos');

   		var valid = true;

   		if(undefined===data.name || undefined===data.username || undefined==data.email || undefined===data.phone){
   			valid = false
   		}

	console.log('Campos validados: ', valid);

   		return valid;
   	};