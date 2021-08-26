const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',// IP address here,
    port: 50542// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  // The .on method lets you specify an event name and a function that does something when that event happens.
  conn.on('data', (data) => {
    console.log('Socket timeout message:', data)
  });

  //connect handler
  conn.on('connect', () => {
    console.log('Successfully connected to game server')
  });

  //client sends name to the server
  conn.on('connect', () => {
    conn.write('Name: Zoe');
  })

  conn.on('connect', () => {

      conn.write('Say: YOLO!!!');

  })

  //conn.on('connect', () => {
  //  conn.write('Move: up');
  //})

/*
  conn.on('connect', () => {
    const moves = ['Move: up', 'Move: right', 'Move: up', 'Move: right'];
    const myMoves = function (moves) {
      let timer = 100;  
    
      moves.forEach(
        move => setInterval(() => {
          console.log(move)
          conn.write(move);
        }, timer += 100)
      );
    }
    myMoves(moves)
  })
*/



  return conn;
};

console.log("Connecting ...");

module.exports = connect;