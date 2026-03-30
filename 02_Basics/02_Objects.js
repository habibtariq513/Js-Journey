// Symbols
const mySym = Symbol("Key1")

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




