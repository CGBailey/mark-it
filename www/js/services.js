angular.module('starter.services', ['ngSanitize'])

.factory('Products', function($http, $sce) {
  var viewing = {};
  var descrip = '';
  return {
    get: function() {
      return $http.get('https://conradbaileycapstone.herokuapp.com/api/v0.2');
    },
    more: function() {
      return $http.get('https://conradbaileycapstone.herokuapp.com/api/v0.2/more')
    },
    setDetail: function(card) {
      viewing = card
      descrip = $sce.trustAsHtml(viewing.EditorialReviews[0].EditorialReview[0].Content[0]);
    },
    getDetail: function() {
      return viewing
    },
    getDescription: function() {
      return descrip
    },
    swipeRight: function(product) {
      $http.post('https://conradbaileycapstone.herokuapp.com/api/v0.2/right', {product_name: product, })
    },
    swipeLeft: function(product) {
      $http.post('https://conradbaileycapstone.herokuapp.com/api/v0.2/left', {product_name: product, })
    },
    swipes: function(product) {
      return $http.get('https://conradbaileycapstone.herokuapp.com/api/v0.2/swipes')
    },
    swipedProducts: function() {
      return $http.get('https://conradbaileycapstone.herokuapp.com/api/v0.2/stuff')
    }
  }
});
