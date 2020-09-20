const app        = require('express')();
const bodyParser = require('body-parser');
const http       = require('http').Server(app);
const io         = require('socket.io')(http);
const mockData   = require('./db/workspaces.json');

app.use(bodyParser.json());

let state = mockData;

// Update the workspaces via rest api
app.put('/update-workspaces', function (req, res) {
    if (Array.isArray(req.body)) {
        state = state.concat(req.body);
    } else {
        state.push(req.body);
    }
    io.emit('workspaces-updated', state);
    logger('workspaces-updated', req.body);
    res.end();
});

const logger = (event, data) => {
    console.info(event, data);
}

io.on('connection', function (socket) {
    console.log('WebSocket Listening...');
    
    io.emit('workspaces-updated', state); // Initial mock data
    logger('workspaces-updated', state);
    
    socket.on('workspaces-updated', function (value) {
        io.emit('workspaces-updated', value);
        logger('workspaces-updated', value);
    });
    
    socket.on('disconnect', function () {
        console.log('WebSocket disconnected');
    });
});

http.listen(3001, function () {
    console.log('listening on *:3001');
});