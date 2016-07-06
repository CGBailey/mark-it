angular.module('starter.services', [])

.factory('Products', function($http) {
  var viewing = {}
  return {
    get: function() {
      return $http.get('https://conradbaileycapstone.herokuapp.com/api/v0.2');
    },
    more: function() {
      return $http.get('https://conradbaileycapstone.herokuapp.com/api/v0.2/more')
    },
    setDetail: function(card) {
      viewing = card
    },
    getDetail: function() {
      return viewing
    }
    swipeRight: function(product) {
      $http.post('https://conradbaileycapstone.herokuapp.com/api/v0.2/right', {product_name: product, })
    }
    swipeLeft: function() {

    }
  }
});
