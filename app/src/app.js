/**
 * Created by chief on 1/18/14.
 */
var debate = angular.module('debate',['ui.router']);


debate
    .config(function($stateProvider, $urlRouterProvider){
        //
        //set up default path
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('/',{
                url:'/',
                templateUrl: 'view/main.html',
                contoller: function($scope){
                    $scope.app = {
                        title : "Eagle View South",
                        page : "Home"
                    }
                }
            })
    });





