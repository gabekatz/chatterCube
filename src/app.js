angular.module('chatter-cube')
  .controller('appCtrl', function(fetchChat){
    this.chat= []
    this.$onInit = function() {
      fetchChat.fetch(this.getChat)
    }

    this.getChat = function (data) {
      this.chat = data;
    }.bind(this)

    this.formMessage = function (messageText, usernameText){
      return {
        message: messageText, 
        username: usernameText,
      }
    }

  })
  .component('app', {
    controller: 'appCtrl',
    template: `
      <div>
        <p id="title"> /c&#179;/ - Chatter Cube</p>
        <message-submit form-message="$ctrl.formMessage" get-chat="$ctrl.getChat" data-messages="$ctrl.chat"></message-submit>
        <message-list data-messages="$ctrl.chat"> </message-list>
      </div>
      `,

  })