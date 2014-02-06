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
                    }
                }
            })

    })
    .controller('appCtrl',function($scope){
        console.info('appCtrl initiated');
    })





