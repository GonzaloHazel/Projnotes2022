#!/usr/bin/env node

/**
 * Module dependencies.
 */
// ES5 👇
// var app = require('../app');
// ES6 👇
import http from 'http';
import app from '../app';
// ES5👇
// var debug = require('debug')('projnotes2022b:server');
// ES6👇🦝?
import debug from '../services/debugLogger';
// ES5👇
// var http = require('http');
// ES6👇

/**
 * Get port from environment and store in Express.
 */
// ES5 👇
// var port = normalizePort(process.env.PORT || '3000');
// ES6👇
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

// app es una funcion de tipo middleware (codigo intermediario)
// (req, res) =>{ ...res.send("algo") }
// ES5 👇
// var server = http.createServer(app);
// ES6 👇
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  // ES5 👇
  // var port = parseInt(val, 10);
  // ES6 👇
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // ES6 👇 ES5👉 var bind = typeof port === 'string'
  const bind =
    typeof port === 'string'
      ? // ? 'Pipe ' + port
        `Pipe ${port}`
      : // ES5 👇 🦝?
        // : 'Port ' + port;
        // ES6 👇🦝?
        `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      // interpolacion 👇 CONCATENACION 🦝👉 console.error(bind + '${bind} requires elevated privileges');
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      // Interpolacion 👇 Concatenaicon 🦝👉 console.error(bind + ' is already in use');
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  // ES6 👇 ES5 👉 var addr = server.address();
  const addr = server.address();
  // ES6 👇 ES5 👉 var bind = typeof addr === 'string'
  const bind =
    typeof addr === 'string'
      ? /* Concatenaciones 👇 
   ? 'pipe ' + addr
    : 'port ' + addr.port;
    Interpolaciones 👇 */
        `pipe ${addr}`
      : `port ${port}`;

  // Intrepolacion 👇 Concatenaicon 👉debug('Listening on ' + bind);
  debug(`Listening on ${bind}`);
  // Desestrecuturando port de addr
  // let {port} = addr
  console.log(`Listening at http://localhost:${port}`);
}
