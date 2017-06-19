var app = angular.module('app', []);

app.controller('MessageController', MessageController );

function MessageController( MessageService ) {
  var vm = this;

  vm.postMessage = function(){
    var newMessage = {
      name: vm.nameInput,
      message: vm.messageInput
    }; // end newMessage
    MessageService.postMessage(newMessage);
    vm.getMessages();
  }; // end postMessage

  vm.getMessages = function(){
    MessageService.getMessages().then(function(data){
      vm.messages = data.data;
      console.log(vm.messages);
    });
  }; // end getMessages

} // end MessageController
