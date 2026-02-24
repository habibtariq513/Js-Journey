// ====================== Numbers ======================

console.log("\n====================== Numbers ======================");

const score = 400
console.log(score);

// Actual Syntax
const balance = new Number(100)
console.log(`Balance: ${balance}`);

// toString() Method
console.log(`toString() Function: ${balance.toString().length}`);

// toFixed() Method
console.log(`toFixed() Function: ${balance.toFixed(2)}`);

// toPrecision()
// --> passing value in brackets must be b/w 1 and 21
const otherNumber = 123.34747
console.log(`toPrecision() Fucntion: ${otherNumber.toPrecision(4)}`);

// toLocalString() Method
// --> It is By Default in US Standard but you can change the country by typing in b/w the parenthesis like this 'en-IN', here "IN" Means India
const hundreds = 100000
console.log(`\n* toLocalString() Func: ${hundreds.toLocaleString('en-IN')}`);
console.log(` --> US Standard: ${hundreds.toLocaleString()}`);
console.log(` --> Indian Standard: ${hundreds.toLocaleString('en-IN')}`);


// ====================== Maths ======================
console.log("\n====================== Maths ======================");

// abs() Method {Abslute}
console.log(`abs() Func: ${Math.abs(-4)}`);

// round() Mehtod
console.log(`round() Func: ${Math.round(4.6)}`);

// ceil() Method
console.log(`ceil() Func: ${Math.ceil(4.6)}`);

// floor() Method
console.log(`floor() Func: ${Math.floor(4.6)}`);

// min() Method
console.log(`min() Func: ${Math.min(4, 6, 5, 3, 1)}`);

// max() Method
console.log(`max() Func: ${Math.max(4, 6, 5, 3, 1)}`);

// === random() Method ===
console.log(`\n* Random() Func: ${Math.random()}`);
console.log(` -> Random() Func: ${(Math.random()*10) + 1}`);

// In order to stay safe from ZERO Case
console.log(` -> Random() Func: ${(Math.random()*10) + 1}`);

// 
console.log(` -> Random() Func: ${Math.floor(Math.random()*10) + 1}`);


console.log(` -> Random() Func: ${Math.floor(Math.random()*10) + 1}`);










  