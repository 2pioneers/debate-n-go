/**
 * Created by chief on 1/18/14.
 */
var debate = angular.module('debate',[
    'ui.router',
    'debate.ctrl',
    'debate.services'
]);

debate.provider('api',function($httpProvider){
    var user,autherror;
    return {
        $get:function(){
            var deferred = $q.defer();

            deferred.promise = $http.get('http://api.evsvillas.com/index.php/login')
                .success(function(data){
                        user = data;
                })
                .error(function(data){
                       autherror = data;
                });

            return deferred.promise; //chains the defer into the $http promise and is returned to the calling context
        }

    }

});


debate
    .config(function($stateProvider, $urlRouterProvider, apiProvider){
        //set up application with a user

        //set up default path
        $urlRouterProvider.when('/hi/:userkey',function($match,api){
                var promise = apiProvider.$get($match)
                    .then(function(){
                        return '/home';
                    });
                promise.resolve();

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





