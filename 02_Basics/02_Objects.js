// Symbols
const mySym = Symbol("Key1")


// OBJECTS can be singleton and Literals

// Object Literals
const JsUser = {
    name: "Habib",
    [mySym]: "MyKey1",  // usage of Symbol in Object  [Interview Question]
    age: 21,
    location: "Lahore",
    email: "habib@devsinc.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Tuesday"]
}

console.log("JsUser:", JsUser["email"]);
console.log("Symbol and Object:", JsUser[mySym]);

// if we want to change the value
JsUser.email = "habib@systemslimited.com"

// if we want to freeze our OBJECT
    // Object.freeze(JsUser)
    // JsUser.email = "habib@Netsol.com" // it'll not throw any error but the value won't be changed
    // console.log(JsUser);

// Fucntion
JsUser.greeting = function() {
    console.log("Hello Js User");
}

// console.log('\n Function without (): ', JsUser.greeting);
console.log('Function with (): ', JsUser.greeting());

JsUser.greetingtwo = function() {
    console.log(`Hello Js User, ${this.name}`);
}

console.log('\nGreeting two:', JsUser.greetingtwo());



// ======= Objects Singleton ======= 
// const tinderUser = new Object()  --> Singleton object

console.log(" \n\n======= Objects Singleton ======= ");


const tinderUser = {}

tinderUser.name = "Habib"
tinderUser.id = "abc321"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "habib@umt.com",
    fullname: {
        username: {
            firstname: "Habib",
            lastname: "Tariq"
        }
    }
}

// Way of accessing nested Objects
console.log("First Name:", regularUser.fullname.username.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

 // Array type merging of two Objects
 const obj3 = {obj1, obj2}
 console.log(obj3);
 


 
 











console.log("\n\n");


















