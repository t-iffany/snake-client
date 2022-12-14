const net = require("net");
const { stdin } = require("process");

// Import connect function from client.js
const { connect } = require("./client");

// Import setupInput function from input.js
const { setupInput } = require("./input");

console.log("Connecting ...");

// Pass the object returned from connect into the setupInput function
const conn = connect();
setupInput(conn);
