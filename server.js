const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 1234 });

wss.on('connection', function connection(ws) {
    console.log('Client connected');

    ws.on('message', function incoming(message) {
        // Convert buffer to string
        const messageString = message.toString('utf-8');
        console.log('Received:', messageString);
    });

    // Interactive shell: send commands from the server terminal
    process.stdin.on('data', function(data) {
        const command = data.toString().trim();
        ws.send(command);
    });
});

console.log('WebSocket server started on ws://127.0.0.1:1234');
