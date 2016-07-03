angular.module('starter.services', [])

.factory('Products', function($http) {
  return {
    get: function(){
      return $http.get('https://conradbaileycapstone.herokuapp.com/api/v0.2');
    }
  }
});
