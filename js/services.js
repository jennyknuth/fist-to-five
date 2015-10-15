app.factory('voteservice', function() {
  var voteservice = {};

  // make a count array for data
  voteservice.dataArr = function (obj) {
    console.log(obj);
    var votes = []
    angular.forEach(obj, function(value, key) {
      console.log(key, value);
      votes.push(value)
    })
    // for (key in obj) {
    //   votes.push(obj[key])
    // }
    // arr.forEach(function(level){
    //   votes.push(level.count)
    // })
    console.log(votes);
    return votes;
  }

  voteservice.countVotes = function (data) {
    return data.reduce(function (prev, curr) {
      return prev += curr;
    })
  }

  return voteservice;
});
