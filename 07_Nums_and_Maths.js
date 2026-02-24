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

// It's for the Smallest value due to floor() function
// -> floor() main aim is to get values without decimals
console.log(` -> Random() Func: ${Math.floor(Math.random()*10) + 1}`);

// Formula for Random() function
// min and max defines Range here
const min = 10  
const max = 20

console.log(` -> Random() Func: ${Math.floor(Math.random() * (max - min + 1)) + min}`);

/*
GitHub Copilot: # Understanding the Random Number Generator Formula

This code generates a **random integer between 10 and 20 (inclusive)**.

## Breaking it down:

### Variables
- `min = 10` → Lower bound of your range
- `max = 20` → Upper bound of your range

### The Formula: `Math.floor(Math.random() * (max - min + 1)) + min`

Let's trace through each part:

1. **`Math.random()`** → Generates a decimal between 0 (inclusive) and 1 (exclusive)
   - Example: `0.543`

2. **`(max - min + 1)`** → Calculates the range size
   - `(20 - 10 + 1) = 11`
   - The `+ 1` ensures both min AND max are possible

3. **`Math.random() * (max - min + 1)`** → Scales to your range
   - `0.543 * 11 = 5.973`

4. **`Math.floor(...)`** → Removes decimals, giving 0 to 10
   - `Math.floor(5.973) = 5`

5. **`+ min`** → Shifts to your actual range (10-20)
   - `5 + 10 = 15`

## Result
You get a random number between **10 and 20** (both inclusive).

### Quick Example Outputs:
- `Math.random() = 0.1` → `0.1 * 11 = 1.1` → `floor = 1` → `1 + 10 = 11` ✓
- `Math.random() = 0.9` → `0.9 * 11 = 9.9` → `floor = 9` → `9 + 10 = 19` ✓
- `Math.random() = 0.99` → `0.99 * 11 = 10.89` → `floor = 10` → `10 + 10 = 20` ✓

*/




  