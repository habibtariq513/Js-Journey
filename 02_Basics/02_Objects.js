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
const obj4 = {5: "a", 6: "b"}

 // Array type merging of two Objects
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}
console.log('\nObject combinition using Spread Operator:', obj3);

// When data comes from Database
const users = [
    {
        id: 1,
        email: "hr@gog.com"
    },
    {
        id: 2,
        email: "hr@gog.com"
    },
    {
        id: 3,
        email: "hr@gog.com"
    }
]

users[1].email
console.log("\nTinderuser Object:", tinderUser);

// Keys Method
console.log("Tinderuser Keys:", Object.keys(tinderUser));

// Values Method
console.log("Tinderuser Values:", Object.values(tinderUser));

// Entries Method
console.log("Tinderuser Entries:", Object.entries(tinderUser));

// hasOwnProperty Method
// --> Used to find the presence of a specific value rather than a looping over bundle of objects
console.log("Tinderuser hasOwnProperty:", tinderUser.hasOwnProperty('isLoggedIn'));


// =============== Object De-Structuring =============== 
console.log("\n\n==== Object De-Structuring ====");

const course = {
    coursename: "JS",
    price: "199",
    courseInstructor: "Habib"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
const {price} = course
const {coursename} = course

console.log(instructor);
console.log(price);
console.log(coursename);

// ==== JSON API Intro ====

// -> JSON stands for JavaScript Object Notation
// -> Random User me (Famous API): https://randomuser.me/
// -> Json Formatter: https://jsonformatter.org/

console.log("\n\n");