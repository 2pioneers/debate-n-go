/**
 * Created by chief on 1/18/14.
 */
var debate = angular.module('debate',[
    'ui.router',
    'debate.ctrl'
]);


debate
    .config(function($stateProvider, $urlRouterProvider){
        //
        //set up default path

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('app',{
                url:'/',
                controller:function($scope){
                  console.info('state controller');
                },
                views:{
                    'header':{
                        templateUrl:'view/header.html',
                        controller: 'headerCtrl'
                    },
                    'info':{
                        templateUrl:'view/info.html',
                        controller: 'infoCtrl'
                    },
                    'forum':{
                        templateUrl: 'view/forum.html',
                        controller: 'forumCtrl'
                    },
                    'comingsoon':{
                        templateUrl:'view/comingsoon.html',
                        controller: 'comingsoonCtrl'
                    }
                }
            })

    });
debate.factory('auth',function($location){
    return {}
});
debate.service('user',function($scope){
    $scope.getUserStatus();

    $scope.login = auth.login();
});
debate.controller('appCtrl',function($scope, auth){
    $scope.userStatus = user.getUserStatus();
});





