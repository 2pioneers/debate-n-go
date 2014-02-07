/**
 * Created by chief on 1/18/14.
 */
var debate = angular.module('debate',[
    'ui.router',
    'debate.ctrl'
]);


debate
    .config(function($stateProvider, $urlRouterProvider, $locationProvider){
        //
        //set up default path

        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('app',{
                url:'/',
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

debate.controller('appCtrl',function($scope){

    })





