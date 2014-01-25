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
                contoller: 'appCtrl'
            })
    })
    .controller('appCtrl',function($scope){
    $scope.app = {
        title : "Eagle View South",
        page : "Home"
    }

    })
    .controller('navCtrl',function($scope){

    })

.directive('closebtn',function(){
        return {
            restrict: 'E',
            template:'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>  '
        }
    });


