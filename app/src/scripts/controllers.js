/**
 * Created by chief on 1/19/14.
 */
 angular.module('debate.ctrl',[])

    .controller('headerCtrl',function($scope,villasApi){
        $scope.nickname = villasApi.userinfo.nickname;
    })

    .controller('infoCtrl',function($scope,villasApi){

    })
    .controller('forumCtrl',function($scope,$modal,$log,$state,$location, villasApi){
         if(villasApi.appdata && villasApi.posts){
             $scope.Posts = villasApi.posts;
             console.log($scope.Posts);
             $scope.newPost = {
                 user:{
                   "$id":villasApi.userkey
                 },
                 title: "The tagline/title of the message",
                 message: "The message",
                 vote_options: [],
                 vote_topic_id: ""
             }
             $scope.addPost= function(){
                 $scope.Posts.append($scope.newPost);
                 villasApi.sendNewPost($scope.newPost);
             }

         }
         $scope.getUserNickname = function(id){
             return villasApi.users
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
                 }
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
     })





