var app = angular.module('eightBallApp', [])

app.controller('AnswerController', ['$scope', '$http', function($scope, $http) {

  $scope.generateAnswer = function(character) {
    console.log(character);

    var characterToRequest = {params: {name: character}}
    $scope.quoteToDisplay = "";

    $http.get('/quote', characterToRequest).then(function(response) {
      console.log(response);
      $scope.quoteToDisplay = response.data.quote;
    })
  }

}])
