app.filter('displayLevel', function () {
  return function (input) {
    var name = {
      4: "low",
      3: "medium-low",
      2: "medium",
      1: "medium-high",
      0: "high"
    }
    return name[input]
  };
});

app.filter('displayAgree', function () {
  return function (input) {
    var name = {
      4: "strongly disagree",
      3: "disagree",
      2: "neither agree nor disagree",
      1: "agree",
      0: "strongly agree"
    }
    return name[input]
  };
});

app.filter('valueClass', function () {
  return function (input) {
    var name = {
      4: "light",
      3: "med-light",
      2: "med",
      1: "med-dark",
      0: "dark"
    }
    return name[input]
  };
});
