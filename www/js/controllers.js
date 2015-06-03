angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaNativeAudio, $timeout) {

  $cordovaNativeAudio
    .preloadSimple('click', 'http://172.16.2.197:7000/02%20Barrump.mp3')
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      alert(error);
  });

  $scope.play = function () {
    $cordovaNativeAudio.play('click');
    $cordovaNativeAudio.loop('music');

    // stop 'music' loop and unload
    //$timeout(function () {
    //  $cordovaNativeAudio.stop('music');

    //  $cordovaNativeAudio.unload('click');
    //  $cordovaNativeAudio.unload('music');
    //}, 1000 * 60);
  };

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
