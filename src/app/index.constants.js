(function() {
  'use strict';

  var url = 'https://jsonplaceholder.typicode.com';
  angular
    .module('angularjs')
    .constant('DOMAIN',{
      'domain' : url
    })
})();
