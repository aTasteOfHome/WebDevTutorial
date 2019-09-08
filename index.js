'use strict';

const http = require('http');
const app = require('./app');

const port = 3000;

app.set('port', port);

const server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? `Pipe ${port}` : `Port ${JSON.stringify(port)}`;
    
    switch (error.code) {
        case 'EACCES':
            error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? `pipe ${addr}` : `port ${JSON.stringify(addr)}`;
    console.log(`Listening on ${bind}`);
}


