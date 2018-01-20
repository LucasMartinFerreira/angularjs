
  angular
  .module('angularjs')
  .controller('Page2Controller', ['$scope', function($scope) {
   // .controller('Page2Controller', Page2Controller);

   	console.log('[Page2Controller] Inicio controlador:  Page2Controller');

   	//controla que se muestre un texto en rojo si alguno de los campos no ha sido rellenado.
   	$scope.show=false;

   	$scope.addUser = function() {
       
   		console.log('[Page2Controller] Inicio funcion addUser ');

   		if(validateFields()){

   			console.log('Todos los campos han sido informados.');
   			$scope.show=false;









   		}else{
   			console.log('Alguno o ninguno de los campos ha sido informado.');
   			$scope.show=true;
   		}


   		var userJson = JSON.stringify(
   			{
		      name: $scope.name,
		      username: $scope.username,
		      email: $scope.email,
		      phone: $scope.phone,
		      userId: 0
		    }
		)

   		console.log('userJson: ', userJson);





   		console.log('[Page2Controller] Fin funcion addUser ');
    };

	console.log('[Page2Controller] Fin controlador:  Page2Controller');








	/**********
	
	funciones privadas

	**********/

	/**
	* Validamos que todos los campos esten informados antes de realizar la petición.
	* @return boolean
	**/
   	function validateFields(){

   		var valid = true;

   		if(undefined==$scope.name || undefined===$scope.username || undefined==$scope.email || undefined===$scope.phone){
   			valid = false
   		}

   		return valid;
   	};


}]);
