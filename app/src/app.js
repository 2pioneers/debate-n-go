/**
 * Created by chief on 1/18/14.
 */
var debate = angular.module('debate',['ui.router','ui.bootstrap','nvd3ChartDirectives']);

function appCtrl($scope){
    $scope.app = {
        title : "Eagle View South",
        page : "Home"
    }
}