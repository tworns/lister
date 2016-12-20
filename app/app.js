
  angular.module('Lister',[])
  .controller('ListController', function($scope){
    $scope.editing = false;
    //create list of movies
    $scope.movies = [
      //{title: 'Jaws', year: '1975', genre: 'thriller'}
    ];
    $scope.errors = [];
    //movie up for editing
    $scope.movie = {title: '', year: '', genre:''};
    //Add a new movie
    $scope.addMovie = function(){
      if($scope.movie.title.trim() !== ''){
        $scope.movies.push($scope.movie);
        $scope.currentMovie = {title: '', year: '', genre:''};
        $scope.movie = {};
        $scope.errors = [];
      }
      else {
        //Error silently to user, log to developer console
        $scope.errors.push("Error: TITLE REQUIRED");
      }
    }
    //remove movie
    $scope.removeMovie = function (index){
      $scope.movies.splice(index,1);
    }
    //edit movie
    $scope.editMovie = function (movie, index){
      $scope.editing = true;
      $scope.movie = movie;
      $scope.removeMovie(index);
    }
    // Update function submits an edited entry
    $scope.updateMovie = function() {
      $scope.addMovie();
      $scope.movie = {};
      $scope.editing = false;
    }

  });
