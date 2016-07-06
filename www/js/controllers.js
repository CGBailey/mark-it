angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Products) {
  var vm = this
  $scope.options = {
  loop: false,
  effect: 'fade',
  speed: 500,
}

$scope.$on("$ionicSlides.sliderInitialized", function(event, data){
  // data.slider is the instance of Swiper
  $scope.slider = data.slider;
});


$scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
  // note: the indexes are 0-based
  $scope.activeIndex = data.activeIndex;
  $scope.previousIndex = data.previousIndex;
})
  Products.get().then(function(results){
    vm.products = results.data;
    vm.title = vm.products[0].ItemAttributes[0].Title[0];
    vm.price = 'N/A'
    vm.image = vm.products[0].TinyImage[0].URL[0];
  })
})
.directive('noScroll', function() {
  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {
      $element.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
}).controller('CardsCtrl', function($scope, Products) {
  var cardPool = [];
  $scope.currentCard = Products.getDetail();
  Products.more().then(function(results){
    cardPool = results.data;
    for(var i = 0; i < 10; i++) $scope.addCard();
  })
  $scope.cards = [];
  $scope.stuff = function(){
    $scope.currentCard = $scope.cards[$scope.cards.length - 1]
    Products.setDetail($scope.currentCard)
  }
  $scope.addCard = function(i) {
    var foo = Math.floor(Math.random() * cardPool.length)
    var newCard = cardPool[foo];
    newCard.id = Math.random();
    cardPool.splice(foo, 1)
    $scope.cards.push(angular.extend({}, newCard));
  }

  $scope.addMore = function(i) {
    var foo = Math.floor(Math.random() * cardPool.length)
    var newCard = cardPool[foo];
    newCard.id = Math.random() + $scope.cards.length;
    cardPool.splice(foo, 1)
    $scope.cards.push(angular.extend({}, newCard));
  }

  $scope.cardSwipedLeft = function(index) {
    console.log('Left swipe');
  }

  $scope.cardSwipedRight = function(index) {
    console.log('Right swipe');
  }

  $scope.cardDestroyed = function(index) {
    $scope.currentCard = {};
    $scope.cards.splice($scope.cards.length -1, 1);
    if ($scope.cards.length <= 0) {
      Products.more().then(function(results){
        cardPool = results.data;
        for(var i = 0; i < 10; i++) $scope.addCard();
      })
    }
  }
})
.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // $scope.chats = Chats.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // };
})

.controller('CardDetailCtrl', function($scope, $stateParams, Products) {

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
