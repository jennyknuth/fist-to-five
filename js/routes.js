app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/chart.html',
    controller: 'VoteController'
  })
})
