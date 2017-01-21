console.log('factory')

app.factory('guideFactory', function($http) {
  return {
    getList : ()=> {
      return $http
      .get('guides.json')
      .then(function (value) {
        //console.log(value)
        return value
      })
      .catch(() => {
        console.log('alert')
    })
  }
 }
})
