angular.module('chatter-cube')
  .controller('appCtrl', function(fetchChat){
    this.chat= []
    this.$onInit = function() {
      fetchChat.fetch(this.getChat)
    }
    this.getChat = function (data) {
      this.chat = data;
    }.bind(this)
  })
  .component('app', {
    controller: 'appCtrl',
    template: `
    <div>test from inside app component
      <message-list data-messages="$ctrl.chat"> </message-list>
    </div>
    `,

  })