const net = require("net");

//connect function moved to client.js

const connect = require('./client');

// setup interface to handle user input from stdin

const setupInput = require('./input');



setupInput(connect());