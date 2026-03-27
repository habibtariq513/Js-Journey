const myArr = [1, 2, 3, 4, 5]
const MyHeros = ["Shakitiman", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// ====== Array Methods ======

// Push Method
myArr.push(5)
console.log(`Push Method: ${myArr}`)

// Pop Method
myArr.pop()
console.log(`Pop Method: ${myArr}`)

// Unshift Method
myArr.unshift(90)
console.log(`Unshift Method: ${myArr}`)

// Shift Method
myArr.shift()
console.log(`Shift Method: ${myArr}`)

// Include Method
console.log(`Includes Method: ${myArr.includes(3)}`);

// Indexof Method
console.log(`Indexof Method: ${myArr.indexOf(3)}`);

// Join Method
const newArr = myArr.join()
console.log(`Join Method: ${myArr}`);
console.log(`Join Method: ${newArr}`);
console.log(`Join Method: ${typeof newArr}`);

// Slice Method
// -> It doesn't affect over Actual Array.
// -> End number is not included.
const newArr2 = myArr.slice(1, 4)
console.log(`\nSlice Method: ${newArr2}`);
console.log(`Slice Method: ${myArr}`);  // 1,2,3,4,5

// Splice Method
// -> It affects over Actual Array.
// -> End number is included.
const newArr3 = myArr.splice(1, 3)
console.log(`\nSplice Method: ${newArr3}`);
console.log(`Splice Method: ${myArr}`);  // 1,5

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)
console.log("\n", marvel_heros)
console.log(`With Index: ${marvel_heros[3][1]}`)

// Concatenate Method
const all_heros = marvel_heros.concat(dc_heros)
console.log(`Concatenate Method: ${all_heros}`)

// Spread Operator
// -> an alternative of Concatenate Method
const all_New_Heros = [...marvel_heros, ...dc_heros]
console.log("\nWith Spread Operator:", all_New_Heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);












