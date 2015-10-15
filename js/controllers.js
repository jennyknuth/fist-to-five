app.controller('VoteController', ['$scope', '$firebaseObject', 'voteservice', function($scope, $firebaseObject, voteservice){
  var votesRef = new Firebase('https://sizzling-inferno-2573.firebaseio.com/votes')
  // $scope.votes = $firebaseArray(votesRef)
  var obj = $firebaseObject(votesRef)
  obj.$loaded().then(function(d) {
    console.log(obj);
    obj.$watch(function() {
      console.log("data changed!");
    });
    $scope.votes = obj.votes
    $scope.data = voteservice.dataArr($scope.votes)
    $scope.number = voteservice.countVotes($scope.data)
    if ($scope.number === 0) { // default view when no votes
      $scope.data[4]=1
    }
  })
  $scope.labels = ["high", "medium-high", "medium", "medium-low", "low"];
  $scope.values = [4, 3, 2, 1, 0];
  Chart.defaults.global.colours=['#0DCEFF', '#5EDEFF', '#94E9FF', '#C9F4FF', '#E4FAFF'];

  // $scope.votes.$loaded().then(function(data) {
    // $scope.data = voteservice.dataArr(data) // make data array for chart
    // $scope.number = voteservice.countVotes($scope.data)
    // if ($scope.number === 0) { // default view when no votes
    //   $scope.data[4]=1
    // }
  // })

  $scope.addVote = function (level) {
    console.log(level);
    console.log($scope.votes);
    console.log(obj.votes);
    // level is the key of the firebaseObject to update
    $scope.votes[level] += 1
    obj.votes = $scope.votes
    console.log($scope.votes);
    obj.$save().then(function(d){
      console.log(obj.votes);
      console.log($scope.object);
      $scope.data = voteservice.dataArr($scope.votes)
      $scope.number = voteservice.countVotes($scope.data)
    })
  }

  $scope.reset = function () {
    console.log($scope.votes);
    for (var i = 0; i < $scope.votes.length; i++) {
      $scope.votes[i] = 0
      obj.$save($scope.votes[i])
    }
    $scope.number = 0;
    $scope.data = [0,0,0,0,1] // default view when no votes
  }

}])
