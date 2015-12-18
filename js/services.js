app.factory('voteservice', function() {
  var voteservice = {};

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
