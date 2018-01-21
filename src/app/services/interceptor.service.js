angular.module('angularjs')
  .factory('interceptorService', function ($log) {



    var requestInterceptor = {

      'request': function (config) {
        return config;
      },
      'requestError': function(response) {
        return response;

      },
      'response': function(response) {
        return response
      },

      'responseError': function(rejection) {

        $log.debug('URL Error     --> ', rejection.config.url);

      }
    };
    return requestInterceptor;
  });
