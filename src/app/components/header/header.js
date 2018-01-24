(function () {
  'use strict';

  angular
    .module('blogHeader', [])
    .directive('blogHeader', blogHeader);

  /** @ngInject */
  function blogHeader() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/header/header.html',
      controller: headerPost,
      controllerAs: 'headerPost'
    };
    return directive;
  }

  /** @ngInject */
  function headerPost() {
    console.log('Controlador directiva header')
  }
})();
