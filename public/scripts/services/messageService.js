app.service('MessageService', function($http){
  var sv = this;

  sv.postMessage = function(newMessage){
    return $http.post('/messages', newMessage);
  }; // end postMessage

  sv.getMessages = function(){
    return $http.get('/messages').then(function(data){
      console.log(data);
      return data;
    });
  }; // end getMessages

}); // end service
