const fs = require('fs')
const path = require('path')


/* fs.mkdir(path.join(__dirname, '/test'),{},  (err)=> {
    if(err) throw err;
    console.log('folder create..')
}); */

// create and write to file

fs.writeFile(path.join(__dirname, '/test','hello.txt'),'hello this',  (err)=> {
    if(err) throw err;
    console.log('write to file done..')
});

fs.writeFile(path.join(__dirname, '/test','hello.txt'),'hello this',  (err)=> {
    if(err) throw err;
    console.log('write to file done..')
});

fs.appendFile(path.join(__dirname, '/test','hello.txt'),'hello this 333',  (err)=> {
    if(err) throw err;
    console.log('write to file done.. ')
});

// Read file

fs.readFile(path.join(__dirname, '/test','hello.txt'),'utf8',  (err, data)=> {
    if(err) throw err;
    console.log('Read to file done.. ' + data)
});