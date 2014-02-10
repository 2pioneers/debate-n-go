/**
 * Created by chief on 1/18/14.
 */
var debate = angular.module('debate',[
    'ui.router',
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
                    data: function($stateParams, $http){
                        $http.get('http://api.evsvillas.com/index.php/login/'+ $stateParams.userkey).success(function(result){
                            return result;
                        })
                    }

                },
                controller:'appCtrl'
            })
            .state('app.home',{
                url:'',
                controller: 'appCtrl',
                views:{
                    '@home.header':{
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





