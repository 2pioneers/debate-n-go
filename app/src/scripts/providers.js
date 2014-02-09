/**
 * Created by chief on 2/9/14.
 */
angular.module('debate.providers',[])

    .provider('villasApiService',function villasApiProvider(){
        var api = {
            host: 'http://api.evsvillas.com/index.php/',
            endpoints: {
                login: 'login/',
                setnickname: 'setnickname/'
            }

        }
        this.$get = ['$q,$http',function($q,$http){
            return new villasApiService($q,$http);
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