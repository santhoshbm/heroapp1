// Moudle Wrapper Function
/* (function (exports, requrie, module, __filename, __dirname{
    
})) */

const personss = {
    name: 'san m',
    age:30.
}

class Person{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    greeting()
    {
        console.log('name: ' , this.name)
        console.log(__dirname)
    }
}

module.exports = Person