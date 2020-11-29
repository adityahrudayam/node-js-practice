const http = require('http');
const funct = require('./routes');

const server = http.createServer(funct);

server.listen(3000);