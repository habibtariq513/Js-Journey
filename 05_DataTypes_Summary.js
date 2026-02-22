// ---- Primitive Data Types ---- 

// 7 Types: String, Integer, Boolean, Null, Undefined, Symbol, BigInt(Some scientific Values than can't handle by Int datatype)

// Undefined: Memory space declared hai or Variable declared hai lekin abhi usma value nahi daali is ko Undefined kehtay hain
// Symbol: Kisi bhi value ko unique bnanay k liye SYMBOL use hota hai

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // Undefined
// let userEmail = undefined; another way of Undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 4787888948957835835897458468n

// ---- Reference Data Types (Non-Primitive Data Types) ---- 
// Arrays, Functions, Objects

// Arrays
const heros = ["shkatiman", "Doga", "Nagraaj"]

// Object
let my_Obj = {
    name: "Habib",
    age: 21
}

// Function
const MyFunction = function(){
    console.log("Hello World");  
}

// ---- Typeof function for Non-Primitive Types ---- 

// --> Non-Primitive types will always be returned as an OBJECT type by "typeof function".
// --> But the type of function will be called "Object function"

// https://262.ecma-international.org/5.1/#sec-11.4.3

console.log("Arrays: ", typeof heros);
console.log("Object: ", typeof my_Obj);
console.log("Function: ", typeof MyFunction);

// ---- Typeof function for Primitive Types ---- 
// NULL will be returned as as OBJECT

console.log("\nInteger: ", typeof score);
console.log("Float: ", typeof scoreValue);
console.log("Boolean: ", typeof isLoggedIn);
console.log("Null: ", typeof outsideTemp);
console.log("Undefined: ", typeof userEmail);
console.log("Symbol: ", typeof id);
console.log("BigInt: ", typeof bigNumber);













