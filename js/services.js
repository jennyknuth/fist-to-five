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

  // removed: chart rerenders each time labels are changed
  // voteservice.getLabels = function (scale) { //graph rerenders each time labels change, hrmmmmf
  //   var labels = []
  //   if (scale === 'agree') {
  //     labels = ['strongly agree', 'agree', 'neither agree nor disagree', 'disagree', 'strongly disagree']
  //   } else if (scale === 'number') {
  //     labels = [4, 3, 2, 1, '0']
  //   } else {
  //     labels = ['high', 'medium-high', 'medium', 'medium-low', 'low']
  //   }
  //   return labels
  // }

  return voteservice;
});
