console.log('testing')

app.config(($routeProvider, $locationProvider)=> {
  $locationProvider.hashPrefix('');
  $routeProvider
 .when('/bk', {
  controller: 'BookCtrl',
  templateUrl: 'partials/books.html',
 })

})
