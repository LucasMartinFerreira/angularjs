(function() {
  'use strict';

  angular
    .module('angularjs',[])
    .directive('search', function(){

      return{
        restrict : 'E',
        templateUrl : 'app/components/search/arSearch.html',
        replace : true,
        scope: {
          ngModel: '=',
          functionModel: '=',
          pageController: '='
        },

        link : function(scope, element){

        }
      }
    })
})();
