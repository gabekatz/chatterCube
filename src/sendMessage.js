angular.module('chatter-cube')
.service('sendMessage', function ($http, fetchChat) {
    this.send = (message, callback) => {
      $http.post('http://chattercube.thirdtape.com/messages', JSON.stringify(message))
  .then(function successCallback(results) {
    console.log('CHATTER-CUBE: Message sent', results);
    fetchChat.fetch(callback);
  }, function errorCallback(data) {
    console.error('CHATTER-CUBE: Failed to send message');
  });
}
})