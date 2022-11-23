const net = require("net");

// require the two constants from constants.js
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: TIF");    
  //  conn.write("Move: up");
  });
  
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};




// Export connect function
module.exports = { connect }