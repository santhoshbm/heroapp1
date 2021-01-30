const http = require('http') // common Js

const path = require('path');

const fs = require('fs');


const server = http.createServer((req, res) => {
console.log(req.url);

if(req.url === '/'){
    fs.readFile(path.join(__dirname, 'public','index.html'),
    (err,content) => {
        if(err) throw err;
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(content);
    })

}
 

if(req.url === '/about'){
    fs.readFile(path.join(__dirname, 'public','about.html'),
    (err,content) => {
        if(err) throw err;
        res.writeHead(200, {'content-type': 'text/html'});
        res.end(content);
    })

}


if(req.url === '/api/users'){
    const users= [
        {name: 'san m', age: 34},
        {name: 'bob b', age: 23},
    ];
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(JSON.stringify(users));
 

}


});

const PORT  = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server urnning on port ${PORT}`));



 