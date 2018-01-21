angular.module('angularjs')
  .factory('HttpSrv',  function ($http, DOMAIN, $cacheFactory) {

    var host = DOMAIN.domain;

    var get = function (config) {

      var petitionConfig = {
        url: '',
        params: '',
        baseUrl: '',
        timeout: '',
        headers :''
      };

      angular.extend(petitionConfig, config);

      return $http({
        method: 'GET',
        url: host + petitionConfig.baseUrl + petitionConfig.url,
        params: petitionConfig.params,
        timeout: petitionConfig.timeout,
        headers :petitionConfig.headers
      });
    };

    var post = function (config) {
      if(angular.isUndefined(config.spinner) && config.url.indexOf("/inspection/assign") === -1){

      }

      var petitionConfig = {
        url: null,
        data: null,
        params: null,
        baseUrl: '',
        timeout: null,
        headers :''
      };

      angular.extend(petitionConfig, config);

      return $http({
        method: 'POST',
        url: host + petitionConfig.baseUrl + petitionConfig.url,
        data : petitionConfig.data,
        params: petitionConfig.params,
        timeout: petitionConfig.timeout,
        headers :petitionConfig.headers,
        modal : petitionConfig.modal
      });
    };

    var put = function (config) {



      var petitionConfig = {
        url: null,
        data: null,
        params: null,
        baseUrl: '',
        timeout: null,
        headers :''
      };

      angular.extend(petitionConfig, config);

      return $http({
        method: 'PUT',
        url: host + petitionConfig.baseUrl + petitionConfig.url,
        data : petitionConfig.data,
        params: petitionConfig.params,
        timeout: petitionConfig.timeout,
        headers :petitionConfig.headers
      });
    };

    var patch = function (config) {



      var petitionConfig = {
        url: null,
        data: null,
        params: null,
        baseUrl: '',
        timeout: null,
        headers :''
      };

      angular.extend(petitionConfig, config);

      return $http({
        method: 'PATCH',
        url: host + petitionConfig.baseUrl + petitionConfig.url,
        data : petitionConfig.data,
        params: petitionConfig.params,
        timeout: petitionConfig.timeout,
        headers :petitionConfig.headers,
        modal : petitionConfig.modal
      });

    };

    var _delete = function (config) {



      var petitionConfig = {
        url: null,
        data: null,
        params: null,
        baseUrl: '',
        timeout: null,
        headers :''
      };

      angular.extend(petitionConfig, config);

      return $http({
        method: 'DELETE',
        url: host + petitionConfig.baseUrl + petitionConfig.url,
        data : petitionConfig.data,
        params: petitionConfig.params,
        timeout: petitionConfig.timeout,
        headers :petitionConfig.headers
      });
    };



    var clearCache = function(){
      var $httpDefaultCache = $cacheFactory.get('$http');

      if($httpDefaultCache){
        $httpDefaultCache.removeAll();
      }
    };

    return {
      get: get,
      post: post,
      put: put,
      patch: patch,
      _delete: _delete,
      clearCache: clearCache
    };
  });
