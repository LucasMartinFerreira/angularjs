angular.module('angularjs')
  .service('headersService', function (URL) {
  'use strict';

  return {

    /**
     * Return headers for Reset Password
     * @returns {{url: (string|forgotPassword), data: {email: string}, headers: {Accept: string, Content-Type: string, Accept-Language: *, ArchaioClient: string, ArchaioVersion: *}, modal: string}}
     */

    headerGetListPosts: function () {
      var data = {
        url: URL.getListPosts,
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      };
      return data;
    },
	
	headerGetUsers: function () {
      var data = {
        url: URL.getListUsers,
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      };
      return data;
    }
  }
});
