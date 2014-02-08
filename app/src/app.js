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
        //
        //set up default path
        $urlRouterProvider.when('/hi/:userkey',function($match, $http){
            //get params and attempt to authenticate a user, have /home wait for user promise to resolve

            $http.get('http://api.evsvillas.com/index.php/login/'+$match.userkey).success(function(data){
                console.log("userinfo: ",data);
                
            });

            console.log('userkey: ', $match);
        })
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





