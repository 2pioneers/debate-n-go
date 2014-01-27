/**
 * Created by chief on 1/18/14.
 */
var debate = angular.module('debate',['ui.router','nvd3ChartDirectives']);


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
    .controller('chartCtrl',function($scope){
        $scope.exampleData = [
                 	{ key: "One", y: 5 },
                     { key: "Two", y: 2 },
                     { key: "Three", y: 9 },
                     { key: "Four", y: 7 },
                     { key: "Five", y: 4 },
                     { key: "Six", y: 3 },
                     { key: "Seven", y: 9 }
                ];
        $scope.xFunction = function(){
            return function(d) {
                return d.key;
            };
        }
        $scope.yFunction = function(){
            return function(d) {
                return d.y;
            };
        }

        $scope.descriptionFunction = function(){
            return function(d){
                return d.key;
            }
        }
    })

.directive('closebtn',function(){
        return {
            restrict: 'E',
            template:'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>  '
        }
    });


