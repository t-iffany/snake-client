
// Create a variable in teh outer-most scope called connection, which can be default to undefined
// Stores the active TCP connection object.
let connection;

const { stdin } = require("process");
// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  // register an event listener for stdin, which uses fcn handleUserInput that runs when you receive input from your keyboard
  stdin.on("data", handleUserInput);
  stdin.resume();  
  return stdin;
};

// in handleUserInput fcn, specify what happens when "data:" is received from stdin
// what happens when a particular key is pressed on the keyboard input
const handleUserInput = function (key) {
  // your code here
//  stdin.on("data", (key) => {
    // \u0003 maps to ctrl+c input   Add within the data callback
    if (key === '\u0003') {
      process.exit();
    };
    if(key === 'w') {
      connection.write("Move: up");
    };
    if(key === 'a') {
      connection.write("Move: left");
    };
    if(key === 's') {
      connection.write("Move: down");
    };
    if(key === 'd') {
      connection.write("Move: right");
    };
  };




// Export setupInput function
module.exports = { setupInput };

/* Don't export handleUserInput because it is only called by setupInput which is already in the same file
   does not need to be called or referenced elsewhere. */