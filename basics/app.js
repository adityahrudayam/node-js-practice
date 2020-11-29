//https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers -- this website contains overview of available headers & their role
//On both requests and responses, Http headers are added to transport metadata from A to B.

"use strict";

const http = require('http');
const routesFunction = require('./routes');
// const express=require('express');
// const app = express();

// function rqListener(req,res) {//first arg=request, 2nd=response
//We can also create anonymous functions
// }

const server = http.createServer(routesFunction); //returns a neverending server

server.listen(3000);//1st arg=port on which we listen, 2nd=hostname