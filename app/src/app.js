/**
 * Created by chief on 1/18/14.
 */
var debate = angular.module('debate',[
    'ui.router',
    'debate.ctrl',
    'debate.services'
]);


debate
    .config(function($stateProvider, $urlRouterProvider, $provide){
        //set up application with a user
        $provide.factory('user',function(){
            return{
                validate:function(match){
                    //check local storage and url for

                    $http.get('http://api.evsvillas.com/index.php/login/'+match.userkey)
                        .success(function(data){
                            console.log("userinfo: ",data);
                        })
                        .error(function(data){

                        });
                },
                whoami: function(user){
                    return {

                    }
                }
            }
        });

        //set up default path
        $urlRouterProvider.when('/hi/:userkey',function($match){
                var promise = user.validate();

            //send autorization through to auth singleton
            $q.resolve(they).then(function(){
                auth.whoami(they);
            });

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





