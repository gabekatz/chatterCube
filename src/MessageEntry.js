angular.module('chatter-cube')
.controller('messageEntryCtrl',function(){}

)
.component('messageEntry',{
  bindings: {
    message: '<',
  },
  controller: 'messageEntryCtrl',
  template:`
    <p className="username">{{$ctrl.message.username}}</p>
    <p className="timeStamp"> {{$ctrl.message.createdAt}}</p>
    <p className="messageEntry"> {{$ctrl.message.message}}</p>
    `
  }
)