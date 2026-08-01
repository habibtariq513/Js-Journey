class Person {
    constructor(name) {
        this.species = 'Homo Sepian'
        this.name = name
    }

    eat() {
        console.log('Eats........');        
    }
}

class Engineer extends Person {    
    constructor(name) {
        super(name)
    }

    work() {
        super.eat()
        console.log('Solves problem');        
    }
}

let e1 = new Engineer()
e1.work()

