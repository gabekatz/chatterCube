angular.module('chatter-cube')
.controller('messageEntryCtrl',function(){})
.component('messageEntry',{
  bindings: {
    message: '<',
  },
  controller: 'messageEntryCtrl',
  template:`
    <p class="username">{{$ctrl.message.username}}</p>
    <p class="timeStamp"> {{$ctrl.message.createdAt}}</p>
    <p class="messageEntry"> {{$ctrl.message.message}}</p>
    `
  }
)