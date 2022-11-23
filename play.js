const net = require("net");
const { stdin } = require("process");

// Import connect function from client.js
const {connect} = require("./client");

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // register an event listener for stdin, which uses fcn handleUserInput that runs when you receive input from your keyboard
  stdin.on("data", handleUserInput);
  return stdin;
};

// in handleUserInput fcn, specify what happens when "data:" is received from stdin
// what happens when a particular key is pressed on the keyboard input
const handleUserInput = function () {
  // your code here
  stdin.on("data", (key) => {
    // \u0003 maps to ctrl+c input   Add within the data callback
    if (key === '\u0003') {
      process.exit();
}
  });
};

handleUserInput();