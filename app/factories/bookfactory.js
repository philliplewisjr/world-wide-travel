console.log('factory')

app.factory('guideFactory', function($http) {
  return {
    getList : ()=> {
      return $http.get('guides.json')
      .then((value)=>{
        console.log(value)
        return value.data.list
      })
    }
  }
})
