(function() {
  'use strict';

  angular
    .module('angularjs')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('commentPost', {
        url: '/commentPost',
        params: {
          idPost: null
        },
        templateUrl: 'app/modules/posts/commentPost/commentPost.html',
        controller: 'commentPostController',
        controllerAs: 'commentPost'
      })

    $urlRouterProvider.otherwise('/');
  }

})();
