(function() {
  'use strict';

  angular
    .module('search',[])
    .directive('search', function(){

      return{
        restrict : 'E',
        templateUrl : 'app/components/search/search.html',
        bindings: {
          filter: '<',
          options: '<',
          onSearch: '&'
        },
        scope : {
          pageController : '='
        },

        link : function(scope, element){
          console.log('Controlador con el que trabajamos para la busqueda:', scope.pageController)
        }
      }
    })
})();
