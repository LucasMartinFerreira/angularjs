(function () {
  'use strict';

  angular
    .module('blogNavbar', [])
    .directive('blogNavbar', blogNavbar);

  /** @ngInject */
  function blogNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: navbarController,
      controllerAs: 'navbar'
    };
    return directive;
  }

  /** @ngInject */
  function navbarController() {
    console.log('Controlador menu de navegacion ')
  }
})();
