/**
 * Created by Brian on 2/7/14.
 */
angular.module('debate.services',[])

    .factory('user',function(){

    })
    .factory('villasApi',function($http,$q){
        return{
             api : {
                host: 'http://api.evsvillas.com/index.php/',
                endpoints: {
                    login: 'login/',
                    setnickname: 'updateusername/',
                    createTopicPost: 'leaveComment/',
                    replyToPost: 'leaveReply/',
                    getAllMessages: 'refreshMessages/',
                    getOptionPostIDs: 'refreshOptionMessageKeys'
                },
                userkey: '',
                nickname:null,
                appdata:null,
                userinfo:null,
                 userId:null,
                 posts:null,
                 users:null,
                 topicID:null,
                 postTopicOptions:null,
                 voteOptions:null,
                 getPostReplies:function(postID){

                 },
                 sortPosts:function(sort){
                     //if function, apply/return, if string, locate sort algorithm, apply/return

                 },
                 sendNewPost: function(post){
                        $http.post(api.host+api.leaveCreateTopicPost,post).then(function(result){
                            console.log(result);
                        });

                 }

             }

        }

    })
