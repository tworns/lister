{
  angular.module('ListController',[])
  .controller('ListController', function($scope){
    $scope.editing = false;
    //create list of movies
    $scope.movies = [
      {title: 'Jaws', year: '1975', genre: 'thriller'}
    ];
    //movie up for editing
    $scope.currentMovie = {title: '', year: '', genre:''};
    $scope.addMove = function(){
      if($scope.movie.title.trim !== ''){
        $scope.movies.push($scope.movie);
        $scope.currentMovie = {title: '', year: '', genre:''};
      }
      else {
        //error
      }
    }


  });
}
