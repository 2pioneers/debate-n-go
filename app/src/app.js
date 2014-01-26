/**
 * Created by chief on 1/18/14.
 */
var debate = angular.module('debate',['ui.router','googlechart']);


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
        $scope.chart = {
            "type": "PieChart",
            "displayed": true,
            "cssStyle": "width:100%;",
            "data": {
                "cols": [
                    {
                        "id": "month",
                        "label": "Month",
                        "type": "string",
                        "p": {}
                    },

                ],
                "rows": [
                    {
                        "c": [
                            {
                                "v": "January"
                            },
                            {
                                "v": 19,
                                "f": "42 items"
                            },
                            {
                                "v": 12,
                                "f": "Ony 12 items"
                            },
                            {
                                "v": 7,
                                "f": "7 servers"
                            },
                            {
                                "v": 4
                            },
                            {
                                "v": " <b>Shipping 4</b><br /><img src=\"http://icons.iconarchive.com/icons/antrepo/container-4-cargo-vans/512/Google-Shipping-Box-icon.png\" style=\"height:85px\" />"
                            }
                        ]
                    },
                    {
                        "c": [
                            {
                                "v": "February"
                            },
                            {
                                "v": 13
                            },
                            {
                                "v": 1,
                                "f": "1 unit (Out of stock this month)"
                            },
                            {
                                "v": 12
                            },
                            {
                                "v": 2
                            },
                            {
                                "v": " <b>Shipping 2</b><br /><img src=\"http://icons.iconarchive.com/icons/antrepo/container-4-cargo-vans/512/Google-Shipping-Box-icon.png\" style=\"height:85px\" />"
                            }
                        ]
                    },
                    {
                        "c": [
                            {
                                "v": "March"
                            },
                            {
                                "v": 24
                            },
                            {
                                "v": 5
                            },
                            {
                                "v": 11
                            },
                            {
                                "v": 6
                            },
                            {
                                "v": " <b>Shipping 6</b><br /><img src=\"http://icons.iconarchive.com/icons/antrepo/container-4-cargo-vans/512/Google-Shipping-Box-icon.png\" style=\"height:85px\" />"
                            }
                        ]
                    }
                ]
            },
            "options": {
                "title": "The Breakdown so Far",
                "isStacked": "true",
                "fill": 20,
                "displayExactValues": true,

                "hAxis": {
                    "title": "Date"
                },
                "tooltip": {
                    "isHtml": true
                }
            },
            "formatters": {},
            "view": {
                "columns": [
                    0,

                ]
            }
        }
    })

.directive('closebtn',function(){
        return {
            restrict: 'E',
            template:'<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>  '
        }
    });


