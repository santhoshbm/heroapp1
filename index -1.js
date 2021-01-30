const Person = require('./person') // common Js

// Improt person file '' // ES6 way of importing
 
console.log('hello from node js ')

const  p1 = new Person("sanbm", 5);

p1.greeting();


const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data)=> console.log('Called Listner: ',data))

logger.log('Hello W !!!')

logger.log('H  W !!!')