const http = require('http');

// req = request res = respons
const server = http.createServer((req, res) => {
  console.log('request made');
  console.log(req.url, req.method); //visar url och method typ GET

  //set header content type
  res.setHeader('Content-Type', 'text/html');

  res.write('<head><link rel ="stylesheet" href="#"></heaed>');
  res.write('<p>Hello, ninjas </p>');
  res.write('<p>Hello, again </p>');
  res.end();
});

// listening
// port number at what port it listens to and host name
server.listen(3000, 'localhost', () => {
  console.log('listening for request on port 3000');
});
