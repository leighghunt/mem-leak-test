const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, () => {
  console.log(`Server running port - using multistage build on node 11: ${port}/`);
  console.log(`Adding serialport package, and bunch of npm stuff, and now calling serialport`);
});



var SerialPort = require("serialport");

console.log("About to open serial port /dev/ttyAMA0" );
var serialPort = new SerialPort('/dev/ttyAMA0', {
  baudRate: 57600,
});
var Readline = SerialPort.parsers.Readline;
var parser = serialPort.pipe(new Readline({delimiter: '\r\n'}));
