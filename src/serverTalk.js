angular.module('chatter-cube')
  .service('chatGet', function ($http) {
      this.chatGet = (callback) => {
        $http({
            url: 'http://http://chattercube.thirdtape.com/messages',
            type: 'GET',
            data: 'order=-createdAt',
            dataType: 'JSON',
            contentType: 'application/json',
          })
    .then(function successCallback(results) {
      console.log('CHATTER-CUBE: Message fetch', results);
      // callback(data.items);
    }, function errorCallback(data) {
      console.error('CHATTER-CUBE: Failed to fetch message');
    });
  }
})
