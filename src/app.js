angular.module('chatter-cube')
  .controller('appCtrl', function(fetchChat){
    this.chat= []
    this.$onInit = function() {
      fetchChat.fetch(this.getChat)
    }

    this.getChat = function (data) {
      this.chat = data;
    }.bind(this)

    this.formMessage = function (messageText){
      return {
        message: messageText, 
        username: 'I\'m screaming on the inside',
      }
    }

  })
  .component('app', {
    controller: 'appCtrl',
    template: `
      <div>
        <message-submit form-message="$ctrl.formMessage" get-chat="$ctrl.getChat" data-messages="$ctrl.chat"></message-submit>
        <message-list data-messages="$ctrl.chat"> </message-list>
      </div>
      `,

  })