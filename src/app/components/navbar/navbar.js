(function () {
  'use strict';

  angular
    .module('blogMenu', [])
    .directive('blogMenu', blogMenu);

  /** @ngInject */
  function blogMenu() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: function(){},
      controllerAs: 'navbar'
    };
    return directive;
  }


})();
