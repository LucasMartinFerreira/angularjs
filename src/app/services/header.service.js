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
    },
		

    headerGetCommentsListPosts: function (idPost) {
      var data = {
        url: URL.getListPosts +'/'+idPost+'/comments',
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      };
      return data;
    },
	
	headerUser: function (userId) {
      var data = {
        url: URL.getListUsers + "/" + userId,
		headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      };
      return data;
    },

    headerGetInfoPost: function (idPost) {
      var data = {
        url: URL.getListPosts +'/'+idPost,
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      };
      return data;
    },

  headerAddUser: function(userJson){
      var data = {
        url : URL.addUser,
        headers:{
           "Content-type": "application/json; charset=UTF-8"
         },
         data:userJson
		};
      return data;
    },
		 
    headerSaveEditPost: function (objectPost) {
      var data = {
        url: URL.getListPosts +'/'+objectPost.id,
        data :JSON.stringify({
          id: objectPost.id,
          title: objectPost.title,
          body: objectPost.body,
          userId: objectPost.userId
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      };
      return data;
    },

  headerUpdateUser: function(userJson, userId){
      var data = {
        url : URL.updateUser + userId,
        headers:{
           "Content-type": "application/json; charset=UTF-8"
         },
         data:userJson
		 };
      return data;
    },
	
    headerDeletePost: function (objectPost) {
      var data = {
        url: URL.getListPosts +'/'+objectPost.id,
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      };
      return data;
    }
	
  }
});
