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
        templateUrl: 'app/modules/posts/posts.html',
        controller: 'PostsController',
        controllerAs: 'posts'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
