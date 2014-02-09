/**
 * Created by chief on 2/9/14.
 */
angular.module('debate.providers',['$httpProvider','$qProvider'])

    .provider('apiService',function apiServiceProvider(){
        var api = {
            host: 'http://api.evsvillas.com/index.php/',
            endpoints: {
                login: 'login/',
                setnickname: 'setnickname/'
            }

        }
        var user = {
            nickname: null,
            userkey:null,
            authorized:false
        }
        this.$get = ['$q,$http',function($q,$http){

            return new apiService($q,$http);
        }]
        this.setuserkey = function(key){

        }
        this.setappdata = function(data){
            appdata = data;
        }
        this.setnickname =function(name){
            usernickname = name;
        }
        this.getnickname = function(){

        }

    });