/**
 * Created by chief on 1/19/14.
 */
 angular.module('debate.ctrl',[])
    .controller('appCtrl',function($rootScope, $state){
        $rootScope.title = 'Eagle View South';
        console.info('appCtrl init for ',$rootScope.data);
        $state.go('.home');

    })

    .controller('headerCtrl',function($scope){

    })

    .controller('infoCtrl',function($scope){

    })
    .controller('forumCtrl',function($scope){

    })
    .controller('comingsoonCtrl',function($scope){

    })