app.factory('voteservice', function() {
  var voteservice = {};

  voteservice.initialize = function () {
    arr = []
    for (var i = 0; i < 5; i++) {
      arr.push(0)
    }
    return arr;
  }

  // make a count array for data
  voteservice.dataArr = function (arr) {
    var votes = []
    arr.forEach(function(level){
      votes.push(level)
    })
    return votes;
  }

  voteservice.countVotes = function (data) {
    return data.reduce(function (prev, curr) {
      return prev += curr;
    })
  }

  return voteservice;
});
