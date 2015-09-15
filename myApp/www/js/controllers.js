angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$state,$timeout) {

    $scope.items = [
      { id:0, name:'a'},
      { id:1, name:'b'},
      { id:2, name:'c'}
    ]


    $scope.doRefresh = function(){
      
      console.log('b');
      loadData(true);        

    }

    function loadData(onRefresh){    //need more study how to loadData

      $timeout( function(){

        console.log('a');

        $scope.$broadcast('scroll.refreshComplete');
        // 广播一个信号来确定刷新结束

      }, 2000);

    }

    $scope.onClickItem = function(item){

      $state.go('tab.userDetail');
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

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }
})

.controller('MapCtrl', function($scope) {
    
})


.controller('UserDetailCtrl', function($scope) {
    

    $scope.onClickSwitch = function(index){

        
    }
});
