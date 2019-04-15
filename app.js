const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, () => {
  console.log(`Server running port - using multistage build on node 11: ${port}/`);
  console.log(`Adding serialport package, and bunch of npm stuff, but not calling serialport`);
});
