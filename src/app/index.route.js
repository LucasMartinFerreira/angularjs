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


      //enlazamos  la url con la pagina que queremos, en este caso formularo de añadir usuario.
      $stateProvider
      .state('add', {
        url: '/user/add',
        templateUrl: 'app/modules/users/addUser.html',
        controller: 'AddUserController',
        controllerAs: 'addUserController'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
