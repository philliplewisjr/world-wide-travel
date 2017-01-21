console.log('controller')

app.controller('BookCtrl', function($scope, $http, guideFactory){
  guideFactory.getList()
  .then((value)=> {
    //console.log(value)
    // let books = value.data
    console.log('GUIDE', value.data.guides)
    $scope.books = value.data.guides
  })
})
