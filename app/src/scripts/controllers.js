/**
 * Created by chief on 1/19/14.
 */
 angular.module('debate.ctrl',[])

    .controller('headerCtrl',function($scope,villasApi){
        $scope.nickname = villasApi.userinfo.nickname;
    })

    .controller('infoCtrl',function($scope,villasApi){

         angular.element('#roundabout').roundabout(
             {
                 autoplay:true,
                 autoplayDuration:4000,
                 duration: 1200,
                 responsive:true
             });

    })
    .controller('forumCtrl',function($scope,$modal,$log,$state,$location,$http, villasApi){
         if(villasApi.appdata && villasApi.posts){
             $scope.Posts = villasApi.posts;
             console.log($scope.Posts);
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

                 $http.post('http://api.evsvillas.com/index.php/leaveComment',post).success(function(data){
                     console.log("success",data);
                 }).error(function(response){
                     console.log("error", response);
                 });

             }


         $scope.convertDate = function(thedate) {
             var month=new Array();
             month[0]="January";
             month[1]="February";
             month[2]="March";
             month[3]="April";
             month[4]="May";
             month[5]="June";
             month[6]="July";
             month[7]="August";
             month[8]="September";
             month[9]="October";
             month[10]="November";
             month[11]="December";
             var d = new Date(thedate.sec * 1000 + thedate.usec);
             return month[d.getMonth()] + ' ' + d.getDate();
         }

         $scope.getUserNickname = function(user){
             for(var i = 0; i < $scope.users.length; i++ ){
                 if($scope.users[i].id == (user['$id'] || user.id))
                 return $scope.users[i].nickname;
             }
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





