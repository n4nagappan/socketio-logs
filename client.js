var WebSocket = require('ws')
, ws = new WebSocket('ws://localhost:9292');

ws.on('open', function() {
    process.stdin.on('data', function(data){
        ws.send(data);
    });
});

