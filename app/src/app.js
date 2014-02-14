/**
 * Created by chief on 1/18/14.
 */
var debate = angular.module('debate',[
    'ngCookies',
    'ui.router',
    'ui.bootstrap',
    'debate.ctrl',
    'debate.services'
]);


debate
    .config(function($httpProvider){
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    })
    .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.when('/hi/:userkey',function($match, $http, villasApi, $state){
            return $http.get('http://api.evsvillas.com/index.php/login/'+ $match.userkey).success(function(result){

                villasApi.userkey = $match.userkey;
                villasApi.appdata = result;
                villasApi.userinfo = result.userData;
                villasApi.posts = result.votingTopic.messages;
                villasApi.users = result.votingTopic.users;
                villasApi.topicID = result.votingTopic.id;
                villasApi.postTopicOptions = result.votingTopic.options;
                villasApi.userId = result.userData.id;
            }).then(function(){
                $state.go('app');
            });

        })

        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('app',{
                url:'/home',
                templateUrl: 'view/home.html',
                controller:function($state){
                    $state.go('.home');
                },
                resolve:{
                    user:function($cookies, $http,villasApi){
                        if(!villasApi.userkey && $cookies.userkey){
                           return $http.get('http://api.evsvillas.com/index.php/login/'+ $cookies.userkey).success(function(result){

                                villasApi.userkey = $cookies.userkey;
                                villasApi.appdata = result;
                                villasApi.userinfo = result.userData;
                                villasApi.posts = result.votingTopic.messages;
                                villasApi.users = result.votingTopic.users;
                                villasApi.topicID = result.votingTopic.id;
                                villasApi.postTopicOptions = result.votingTopic.options;
                                villasApi.userId = result.userData.id;
                            });
                        } else {
                            return;
                        }
                    }
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







