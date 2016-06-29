/**
 * Created by Kishan on 08-Jun-16.
 */
var moviesapp = angular.module('moviesApp',[]);

moviesapp.service('myServ', ['$http',function ($http) {
    return{Async: function (link) {
        return $http.get(link);
    }};
}]);

moviesapp.controller('mainCtrl',['$scope','$http','myServ',function ($scope,$http,myServ) {
    var self = this;
    self.link = 'https://api.themoviedb.org/3/search/movie?api_key=2c3bc0f5d4658e72d743844770976b5b&query=';
    self.data = {};
    self.noPoster = 'https://assets.tmdb.org/assets/7f29bd8b3370c71dd379b0e8b570887c/images/no-poster-w185-v2.png';
    self.base_url = 'https://image.tmdb.org/t/p/w185';
    
    //ok
    self.myDialog = function(dat){
        alert(dat.title);
    };
    
    myServ.Async(self.link+'king')
        .then(function (response) {
            self.data = response.data.results;
        }, function (response) {
            console.log(response);
        });
}]);
