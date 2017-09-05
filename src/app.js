angular.module('chatter-cube')
  .controller('appCtrl', function(fetchChat){
    // console.log('test')
    this.chat= []
    this.$onInit = function() {
      // console.log('test')
      fetchChat.fetch(this.getChat)
    }
    this.getChat = function (data) {
      this.chat = data;
    }
  })
  .component('app', {
    template: `
    <div> test
    </div>
    `,
    controller: 'appCtrl',

  })