(function() {
  'use strict';

  angular
    .module('angularjs')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/modules/page1/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

      //enlazamos  la url con la pagina que queremos, en este caso formularo de añadir usuario.
      $stateProvider
      .state('add', {
        url: '/add',
        templateUrl: 'app/modules/page2/page2.html',
        controller: 'Page2Controller',
        controllerAs: 'page2'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
