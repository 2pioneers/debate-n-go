/**
 * Created by chief on 1/18/14.
 */
var debate = angular.module('debate',[
    'ui.router',
    'ui.bootstrap',
    'debate.ctrl',
    'debate.services'
]);


debate
    .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('app',{
                url:'/home/:userkey',
                templateUrl: 'view/home.html',
                resolve:{
                    forumdata : function($stateParams, $http){
                        return $http.get('http://api.evsvillas.com/index.php/login/'+ $stateParams.userkey)

                    }

                },
                controller: function($rootScope,forumdata,$state,$stateParams, villasApi){
                    $rootScope.title = 'Eagle View South';
                    villasApi.userkey = $stateParams.userkey;
                    villasApi.appdata =forumdata;
                    villasApi.nickname = "Batman";
                    $state.go('.home');

                }
            })
            .state('app.home',{
                url:'',
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

})





