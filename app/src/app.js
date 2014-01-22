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
                templateUrl: 'view/main.html',
                contoller: 'appCtrl'
            })
    })
    .controller('appCtrl',function($scope){
    $scope.app = {
        title : "Eagle View South",
        page : "Home"
    }

})


