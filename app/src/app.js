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
    .config(['$sceDelegateProvider', function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist(['self', 'http://api.evsvillas.com/**']);

    }])
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
                    console.log(forumdata);
                    $rootScope.title = 'Eagle View South';
                    villasApi.userkey = $stateParams.userkey;
                    villasApi.appdata =forumdata;
                    villasApi.userinfo = forumdata.data.userData;
                    villasApi.posts = forumdata.data.votingTopic.messages;
                    villasApi.users = forumdata.data.votingTopic.users;
                    villasApi.topicID = forumdata.data.votingTopic.id;
                    villasApi.postTopicOptions = forumdata.data.options;
                    villasApi.userId = forumdata.data.userData.id;
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







