app.controller('VoteController', ['$scope', '$firebaseObject', 'voteservice', function($scope, $firebaseObject, voteservice){
  var votesRef = new Firebase('https://sizzling-inferno-2573.firebaseio.com/votes')
  var obj = $firebaseObject(votesRef)
  obj.$watch(function () {
    obj.$loaded().then(function(d) {
      console.log(obj.votes);
      console.log(obj.scale);
      $scope.scale = obj.scale
      $scope.votes = obj.votes
      $scope.data = voteservice.dataArr($scope.votes)
      $scope.number = voteservice.countVotes($scope.data)
      if ($scope.number === 0) { // default view when no votes
        $scope.data[4]=1
      }
    })
    $scope.labels = ["high", "medium-high", "medium", "medium-low", "low"]; // fix this to reflect scale!
    $scope.values = [4, 3, 2, 1, 0];
    Chart.defaults.global.colours=['#0DCEFF', '#5EDEFF', '#94E9FF', '#C9F4FF', '#E4FAFF'];
  });

  $scope.addVote = function (level) {
    // level is the key of the firebaseObject to update
    $scope.votes[level] += 1
    obj.votes = $scope.votes
    obj.$save().then(function(d){
      $scope.data = voteservice.dataArr($scope.votes)
      $scope.number = voteservice.countVotes($scope.data)
    })
  }

  $scope.reset = function () {
    for (var i = 0; i < $scope.votes.length; i++) {
      $scope.votes[i] = 0
    }
    obj.votes = $scope.votes
    obj.$save().then(function () {
      $scope.number = 0;
      $scope.data = [0,0,0,0,1] // default view when no votes
    })
  }

  $scope.setScale = function (scale) {
    console.log(scale);
    obj.scale = scale
    obj.$save()
  }

}])
