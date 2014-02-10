/**
 * Created by chief on 1/19/14.
 */
 angular.module('debate.ctrl',[])

    .controller('headerCtrl',function($scope,villasApi){
        $scope.nickname = villasApi.nickname;
    })

    .controller('infoCtrl',function($scope,villasApi){

    })
    .controller('forumCtrl',function($scope,villasApi){
         if(villasApi.appdata){
             $scope.Posts = villasApi.appdata;
         }

    })
    .controller('comingsoonCtrl',function($scope,$modal,$log, villasApi){

         $scope.open = function () {

             var modalInstance = $modal.open({
                 templateUrl: 'view/comingsoon.html',
                 controller: function($modalInstance){
                     $scope.cancel = function () {
                         $modalInstance.dismiss('cancel');
                     };
                 },
             });

             modalInstance.result.then(function (selectedItem) {
                 $scope.selected = selectedItem;
             }, function () {
                 $log.info('Modal dismissed at: ' + new Date());
             });
         };

         if(!villasApi.appdata){
             $scope.open();
         }
     });
