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
  <div>
    <message-entry class="indiMessage" ng-repeat="message in $ctrl.messages" data-message="message"></message-entry>
  </div>
  `
})