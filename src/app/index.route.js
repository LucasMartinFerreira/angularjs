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
        params: {
          objectPost: null,
          action :null
        },
        templateUrl: 'app/modules/posts/listPost/posts.html',
        controller: 'PostsController',
        controllerAs: 'posts'
      });



      $stateProvider
      .state('users', {
        url: '/users',
        params: {
          objectUser: null,
          action :null
        },
        templateUrl: 'app/modules/users/userlist.html',
        controller: 'UserlistController',
        controllerAs: 'userlist'
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
