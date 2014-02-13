/**
 * Created by chief on 1/19/14.
 */
 angular.module('debate.ctrl',[])

    .controller('headerCtrl',function($scope,villasApi){
        $scope.nickname = villasApi.userinfo.nickname;
    })

    .controller('infoCtrl',function($scope,villasApi){

    })
    .controller('forumCtrl',function($scope,$modal,$log,$state,$location,$http, villasApi){
         if(villasApi.appdata && villasApi.posts){
             $scope.Posts = villasApi.posts;
             console.log($scope.Posts);

             var postModel = function(){
                 return {
                     user:{
                         "$id":villasApi.userId
                     },
                     title: "Title Your Post",
                     message: "Tell us all what you think.",
                     vote_topic_id:"000000000000000000000004",
                     vote_options:["000000000000000000000005","000000000000000000000006","000000000000000000000007"]
                 }
             }


             $scope.newPost = postModel();
             $scope.addPost = function(){
                 var newPost = $scope.newPost;
                 if(!newPost){
                     return;
                 }
                 var post = angular.extend({},new postModel(),newPost);
                 $scope.Posts.push(post);
                 $scope.newPost = postModel();
                 console.log($scope.Posts);
                 var httpConfig = {
                     headers: {
                         'Content-Type': 'application/json'
                     }
                 };
                 $http.post('http://api.evsvillas.com/index.php/leaveComment',post, httpConfig).success(function(data){
                     console.log("success",data);
                 }).error(function(response){
                     console.log("error", response);
                 });

             }
             var convertDate = function(returnedDate) {
                 return new Date(returnedDate.sec * 1000 + returnedDate.usec)
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





