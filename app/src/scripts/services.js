/**
 * Created by Brian on 2/7/14.
 */
angular.module('debate.services',[])

    .factory('userService',function(){

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
                userkey: ''

             },
            authorize: function(userkey){
               $http.get(api.host+api.login+userkey)
                    .success(function(data){
                        console.log(data);
                       api.setuserkey(userkey);
                    })
                    .error()
                    .then();

            },
            setuserkey : function(key){
                api.userkey = key;
            },
            setappdata : function (data) {
                appdata = data;
            },
            setnickname :function(name){
                usernickname = name;
            },
            getnickname : function(){

            }
        }

    })