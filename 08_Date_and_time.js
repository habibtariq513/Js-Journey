// ================ Date ================

let MyDate = new Date()
console.log(MyDate);
console.log(`Date wtih toString(): ${MyDate.toString()}`);
console.log(`Date wtih toISOString(): ${MyDate.toISOString()}`);
console.log(`Date wtih toJson(): ${MyDate.toJSON()}`);
console.log(`Date wtih toLocaleString(): ${MyDate.toLocaleString()}`);
console.log(`Date wtih toLocaleDateString(): ${MyDate.toLocaleDateString()}`);
console.log(`Date wtih toLocaleTimeString(): ${MyDate.toLocaleTimeString()}`);
console.log(`Date wtih toDateString(): ${MyDate.toDateString()}`);

console.log(`\nType of date: ${typeof MyDate}`);

// Hard Coded Date 
let myCreatedDate = new Date(2026, 1, 25, 5, 55) // Year, Month(Starts from Zero), Date, hour, minute
console.log(`myCreatedDate: ${myCreatedDate.toDateString()}`);
console.log(`myCreatedDate with Time : ${myCreatedDate.toLocaleString()}`);

// for YY-MM-DD format
// let NewCreatedDate = new Date("2025-02-25")
let NewCreatedDate = new Date("02-25-2025") // MM-DD-YY format
console.log(`NewCreatedDate: ${NewCreatedDate.toLocaleString()}`);

// Time Stamps
let timeStamps = Date.now()
console.log(`Time Stamps: ${timeStamps}`);

console.log(`myCreatedDate with getTime(): ${myCreatedDate.getTime()}`);
console.log(`myCreatedDate with getTime(): ${Math.floor((Date.now())/1000)}`);






 
 