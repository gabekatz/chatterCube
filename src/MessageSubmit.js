angular.module('chatter-cube')
  .controller('messageSubmitCtrl', function($scope,sendMessage, fetchChat){
    this.send = function() {
      var message = this.formMessage($scope.messageText)
      sendMessage.send(message, this.getChat)
    }.bind(this)
  })

  .component('messageSubmit', {
    bindings: {
      messages: '<',
      formMessage: '<',
      test: "<",
      getChat: "<",
    },
    controller: 'messageSubmitCtrl',
    template: `
    <input type="text" name='message' id='messageSubmit' placeholder='Type message here' 
    ng-model="messageText"/>
    <button class="btn" ng-click="$ctrl.send()"> Submit </button>
    `
  })