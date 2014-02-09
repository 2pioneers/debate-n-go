/**
 * Created by chief on 1/18/14.
 */
var debate = angular.module('debate',[
    'ui.router',
    'debate.ctrl',
    'debate.services',
    'debate.providers'
]);


debate
    .config(function($stateProvider, $urlRouterProvider, apiProvider){
        //set up application with a user

        //set up default path
        $urlRouterProvider.when('/hi/:userkey',function($match){
                apiProvider.setuserkey($match);
                
        });
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home',{
                url:'/home',
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
    .controller('appCtrl',function($rootScope){
        $rootScope.title = 'Eagle View South';
    });





