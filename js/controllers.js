app.controller('VoteController', ['$scope', '$firebaseArray', 'voteservice', function($scope, $firebaseArray, voteservice){
  var votesRef = new Firebase('https://sizzling-inferno-2573.firebaseio.com/votes')
  $scope.votes = $firebaseArray(votesRef)
  $scope.labels = ["high", "medium-high", "medium", "medium-low", "low"];
  $scope.values = [4, 3, 2, 1, 0];
  Chart.defaults.global.colours=['#0DCEFF', '#5EDEFF', '#94E9FF', '#C9F4FF', '#E4FAFF'];

  $scope.votes.$loaded().then(function(data) {
    $scope.data = voteservice.dataArr(data) // make data array for chart
    $scope.number = voteservice.countVotes($scope.data)
    if ($scope.number === 0) { // default view when no votes
      $scope.data[4]=1
    }
  })

  $scope.addVote = function (level) {
    // level is the index of the firebaseArray to update
    $scope.votes[level].count += 1
    $scope.votes.$save($scope.votes[level])
    $scope.data = voteservice.dataArr($scope.votes)
    $scope.number = voteservice.countVotes($scope.data)
  }

  $scope.reset = function () {
    for (var i = 0; i < $scope.votes.length; i++) {
      $scope.votes[i].count = 0
      $scope.votes.$save($scope.votes[i])
    }
    $scope.number = 0;
    $scope.data = [0,0,0,0,1] // default view when no votes
  }

}])
