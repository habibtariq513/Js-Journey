// Class is a blueprint on which we create different objects

class ToyotaCar {
    constructor(brand, mileage) { // Consrtuctor
        this.brand = brand
        this.mileage = mileage        
    }
}

// Objects:
const fortuner = new ToyotaCar('fortuner', 20);
console.log(fortuner);

const lexus = new ToyotaCar('lexus', 26);
console.log(lexus);