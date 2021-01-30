const http = require('http');

// Create server object

http.createServer((request, response) => {
    //write a response
    response.write('Hellow Workd');

    response.end();


}).listen(5000, () => console.log('Serer running.. '))