var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '474309',
  key: 'af894f403c77e822ac1b',
  secret: '3903517ae558839f84a9',
  cluster: 'eu',
  encrypted: true
});

pusher.trigger('my-channel', 'my-event', {
  "message": "hello world"
});