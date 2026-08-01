// JS objects have a special property called Prototype and It'll have some especial properties and methods.

const employee = {
    calTax() {
        console.log('10% tax Deducted.');        
    }
}

const ali = {
    salary: 50000
}

ali.__proto__ = employee;

const habib = {
    calTax() {
        console.log('20% Tax will be deducted.');        
    }
}

// if prototype and objects have same methods then objects' methods will be used.
habib.__proto__ = employee
habib.calTax()
