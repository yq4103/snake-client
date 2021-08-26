let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

/*const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
*/

const handleUserInput = function (key) {
  if (key === "w") {
    connection.write("Move: up");}

  if (key === "s") {
    connection.write("Move: down");}

  if (key === "a") {
    connection.write("Move: left");}

  if (key === "d") {
    connection.write("Move: right");}

  if (key === '\u0003') {
    process.exit();
  }
};


module.exports = setupInput;