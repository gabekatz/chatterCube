angular.module('chatter-cube')
  .service('fetchChat', function ($http) {
      this.fetch = (callback) => {
        $http({
            url: 'http://chattercube.thirdtape.com/messages',
            type: 'GET',
            dataType: 'JSON',
            contentType: 'application/json',
          })
    .then(function successCallback(results) {
      console.log('CHATTER-CUBE: Message fetch', results);
      callback(results.data.messages);
    }, function errorCallback(data) {
      console.error('CHATTER-CUBE: Failed to fetch message');
    });
  }
})
