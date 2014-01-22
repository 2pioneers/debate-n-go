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
                templateUrl: 'views/main.html',
                contollerProvider: function($stateParams) {
                    var ctrlName = $stateParams.type + "Controller";
                    return ctrlName;
                }
            })
    })
    .controller('appCtrl',function($scope){
    $scope.app = {
        title : "Eagle View South",
        page : "Home"
    }

})


