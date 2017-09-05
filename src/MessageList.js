angular.module('chatter-cube')
.controller('messageListCtrl', function(){
  console.log(this, 'from messagelist')
})
.component('messageList', {
  bindings: {
    messages: '<',
  },
  controller: 'messageListCtrl',
  template:`
  <div className="indiMessage"> testing
    <message-entry ng-repeat="message in $ctrl.messages" data-message="message"></message-entry>
  </div>
  `
})