
(function() {
  'use strict';

//añadimos el servicio al módulo de nuestra aplicación.
angular
    .module('angularjs')
  	.service('ServicePage2', ServicePage2);

  /**
  * Función que ejecuta el servicio
  * @param injección del servicio de angular para realizar las peticiones http.
  **/
  function ServicePage2($http) {
   
    console.log('[ServicePage2] Inicio service:  ServicePage2');

    this.addUser = function(userJson){

    	console.log('[ServicePage2] Inicio función addUser.');

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
   		   		
   		var apiResponse = $http(config);
   		
  		apiResponse.success(function(data, status, headers, config) {
      			
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

 	console.log('[ServicePage2] Fin service:  ServicePage2');

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