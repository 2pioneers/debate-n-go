/**
 * Created by chief on 1/18/14.
 */
var debate = angular.module('debate',['ui.router','ui.bootstrap','nvd3ChartDirectives']);


debate
    .config(function($stateProvider, $urlRouterProvider){
        //
        //set up default path
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('/',{
                url:'/',
                template: '<h1>Congrats your app is working</h1>'
            })
    })
    .controller('appCtrl',function($scope){
    $scope.app = {
        title : "Eagle View South",
        page : "Home"
    }
})
