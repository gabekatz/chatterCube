angular.module('chatter-cube')
  .controller('appCtrl', function(){
    chat= []
    this.$onInit = function() {
      serverTalk.chatGet()
    }
    this.getChat = function () {

    }
  })
  .component('app', {
    template: `
    <div> test
    </div>
    `,

  })