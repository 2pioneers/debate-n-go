/**
 * Created by chief on 1/19/14.
 */
 angular.module('debate.ctrl',[])

    .controller('headerCtrl',function($scope,$http,villasApi, $cookies){
       if(villasApi.userinfo.nickname){
           $scope.nickname = villasApi.userinfo.nickname;
           $cookies.nickname = villasApi.userinfo.nickname;
           if(villasApi.userkey) $cookies.userkey = villasApi.userkey;
       } else if ($cookies.nickname){
           $scope.nickname = $cookies.nickname;
         }
         angular.element('.dropdown-menu').find('form').click(function (e) {
             e.stopPropagation();
         });

         $scope.changeNickname = function(){

              var nickname = {
                  user_id: villasApi.userId,
                  new_username:$scope.nickname
              }
             $http.post('http://api.evsvillas.com/index.php/updateUsername',nickname)

         }

    })

    .controller('infoCtrl',function(){

         angular.element('#roundabout').roundabout(
             {
                 autoplay:true,
                 autoplayDuration:9000,
                 duration: 1200,
                 responsive:true
             });

    })
    .controller('forumCtrl',function($scope,$modal,$log,$state,$location,$http, villasApi){
         $scope.isCollapsed = true;
         if(villasApi.appdata && villasApi.posts){
             $scope.Posts = villasApi.posts;
         }
             var postModel = function(){
                 return {
                     user:{
                         "id":villasApi.userId
                     },
                     title: "Title Your Post",
                     message: "Tell us all what you think.",
                     vote_topic_id:"000000000000000000000004",
                     vote_options:["000000000000000000000005","000000000000000000000006","000000000000000000000007"]
                 }
             }


             $scope.users = villasApi.users;
                console.log($scope.users);

             $scope.newPost = postModel();
             $scope.addPost = function(){
                 var newPost = $scope.newPost;
                 if(!newPost){
                     return;
                 }
                 var post = angular.extend({},new postModel(),newPost);
                 $scope.Posts.push(post);
                 $scope.newPost = postModel();

                 $http.post('http://api.evsvillas.com/index.php/leaveComment',post).error(function(response){

                 });

             }


         $scope.getUserNickname = function(user){
             for(var i = 0; i < $scope.users.length; i++ ){
                 if($scope.users[i].id === (user['$id'] || user.id))
                 return $scope.users[i].nickname;
             }
         }

         $scope.predicateName = function(predicate){
             if(!predicate || predicate == 'postDate.sec'){
                 return "Post Date";
             } else {
                 return '# Comments';
             }
         }
    })

     .controller('replyCtrl',function($scope, villasApi, $http){
            var replies = $scope.post.children;
            var parentId = $scope.post.id;
         $scope.submit = function(){
                var responseObj = {
                    user:{
                        'id':villasApi.userId
                    },
                    response:$scope.response,
                    parent_id:parentId
                }
             replies.push(responseObj);
             $scope.response  = "",
             $http.post('http://api.evsvillas.com/index.php/leaveReply',responseObj)

         }
     })
    .controller('comingsoonCtrl',function($scope,$modal,$log,$cookies,$http, villasApi){

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

         $scope.launchEmail = function(){

         }

         if(!villasApi.appdata){
             $scope.open();
         }
     })





