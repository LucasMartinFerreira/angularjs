
(function() {
  'use strict';

//añadimos el servicio al módulo de nuestra aplicación.
angular
    .module('angularjs')
  	.service('usersService', usersService);

  /**
  * Función que ejecuta el servicio
  * @param injección del servicio de angular para realizar las peticiones http.
  **/
  function usersService($http) {
   
    console.log('[usersService] Inicio service:  usersService');

    this.addUser = function(userJson){

    	console.log('[usersService] Inicio función addUser.');

    	//obtenemos las cabeceras de la aplicación.
    	var headers = getHeaders();

    	//creamos la configuración para enviar en la petición http.
		var config={
			header: headers,
		    method:"POST",
		    url:"https://jsonplaceholder.typicode.com/users/",
		    data:userJson
		  }
   
   		//realizamos la petición para crear un usuario.		
  		$http(config).success(function(data, status, headers, config) {
      			
      		console.log('Creación del usuario OK. Status = ', status)

      		//si ha sido exitosa la petición, retornamos el json con la información, así, 
      		// la podemos añadir al listado de nuestra aplicación.
      		return data;

  		}).error(function(data, status, headers, config) {
      		console.log('Creación del usuario KO. Status = ', status);

      		//si se ha producido algún error, retornamos un json vacio.
      		return JSON.stringify({});
  		});  
  		
    }

 	console.log('[usersService] Fin service:  usersService');

  }//end service.
 

})();



/**************
 
 FUNCIONES PRIVADAS

**************/



/**
* Función que compone las cabeceras necesarias para añadir usuario.
* @return objeto con las cabeceras.
**/
function getHeaders(){

	var header = 
	   	{
	   		'Content-type' : 'application/json; charset=UTF-8'
		};
	
	return header;
};