angular.module('starter.services', [])

.factory('Products', function($http) {
  return {
    get: function(){
      $http.get('https://conradbaileycapstone.herokuapp.com/api/v0.1').then(function(result) {
        return result;
      })
    }
  }
});
