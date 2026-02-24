// ====================== Numbers ======================

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







  