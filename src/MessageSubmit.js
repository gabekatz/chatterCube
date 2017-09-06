angular.module('chatter-cube')
  .controller('messageSubmitCtrl', function($scope,sendMessage, fetchChat){
    this.send = function() {
      var message = this.formMessage($scope.messageText, $scope.nameInput);
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
    <div class=messageField>
      <div class="nameField">
        <p id="nameText">Name</p>
        <input id="nameInput" placeholder='anonymous' ng-model='nameInput' />
      </div>
      <div class="commentField">
        <p id="commentText">Comment</p>
        <input type="text" name='message' id='commentInput' placeholder='Type message here' 
        ng-model="messageText"/>
        </div>
      <button class="btn" ng-click="$ctrl.send()"> Submit </button>
    </div>
    `
  })