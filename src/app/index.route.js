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
        controllerAs: 'posts',
        bindings :{
          edit : '<',
          onViewChange: '&'
        }
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


    $urlRouterProvider.otherwise('/');
  }

})();
