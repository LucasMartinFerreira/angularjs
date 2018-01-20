
(function() {
  'use strict';

angular
    .module('angularjs')
  	.service('ServicePage2', ServicePage2);

  
  function ServicePage2() {
   
    console.log('[ServicePage2] Inicio service:  ServicePage2');

    this.addUser = function(){

    	console.log('[ServicePage2] Inicio funcion addUser ');






    	console.log('[ServicePage2] Inicio funcion addUser ');
    }
	

 	console.log('[ServicePage2] Fin service:  ServicePage2');


  }//end service.
 

})();