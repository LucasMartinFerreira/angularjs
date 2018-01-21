(function () {
  'use strict';

  angular
    .module('blogNavbar', [])
    .directive('blogNavbar', headerBlog);

  /** @ngInject */
  function headerBlog() {
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
