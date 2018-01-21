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



      $stateProvider
      .state('users', {
        url: '/users',
        templateUrl: 'app/modules/page1/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });


      //enlazamos  la url con la pagina y controlador que queremos.
      $stateProvider
      .state('add', {
        url: '/users/add',
        templateUrl: 'app/modules/users/user.html',
        controller: 'UserController',
        controllerAs: 'UserController'
      });

      $stateProvider
      .state('update', {
        url: '/users/update/:userId',
        templateUrl: 'app/modules/users/user.html',
        controller: 'UserController',
        controllerAs: 'UserController'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
