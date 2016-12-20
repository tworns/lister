
  angular.module('Lister',[])
  .controller('ListController', function($scope){
    $scope.editing = false;
    //create list of movies
    $scope.movies = [
      {title: 'Jaws', year: '1975', genre: 'thriller'}
    ];
    //movie up for editing
    $scope.movie = {title: '', year: '', genre:''};
    //Add a new movie
    $scope.addMovie = function(){
      if($scope.movie.title.trim !== ''){
        $scope.movies.push($scope.movie);
        $scope.currentMovie = {title: '', year: '', genre:''};
      }
      else {
        //error
      }
    }
    //remove movie
    $scope.removeMovie = function (index){
      $scope.movies.splice(index,1);
    }


  });
