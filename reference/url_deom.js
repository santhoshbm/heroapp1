const url = require('url');

const myurl = new URL('http://mywebsite.com/hellow.htm?id=001&status-active');

console.log(myurl.href)


console.log(myurl.hostname)

myurl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));