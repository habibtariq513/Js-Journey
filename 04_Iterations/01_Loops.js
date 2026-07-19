// --------- for of Loop ---------
const arr = [11, 22, 33, 44]
for (const i of arr) {
    // console.log(i);    
}

const greet = "Hello Jani"
for (const i of greet) {
    // console.log(i);
}

// --------- Maps ---------
// Provides Unique values and gets printed in the same way they're written.
const map = new Map()
map.set("pk", "Pakistan")
map.set("uk", "United Kingdom")
map.set("in", "India")

// console.log(map);

// --------- for of loop on MAPS ---------
for (const [key, val] of map) {
    // console.log(key, ':-', val);    
}

// --------- for in Loop on Objects ---------
const myObj = {
    js: "JavaScript",
    py: "Python",
    cpp: "C++",
    C_Hash: "C#"
}

for (const key in myObj) {    
    // console.log(`${key}: ${myObj[key]}`);    
}

// on Arrays
const programming = ["js", "cpp", "java", "python"]
for (const key in programming) {
    // console.log(`${key}: ${programming[key]}`); 
}

// --------- for each Loop ---------
const coding = ["js", "cpp", "java", "python"]

// Loop Using Simple function
coding.forEach(function(item) {
    // console.log(item);    
});

// Loop Using Arrow function
coding.forEach((item) => {
    // console.log(item);    
});

// Other parameters in ForEach loop
coding.forEach((item, index, array) => {
    // console.log(item, index, array);    
});

// Loop On Array
const myCode = [
    {
        LangName: "Javascript",
        LangExe: "js"
    },
    {
        LangName: "Java",
        LangExe: "java"
    },
    {
        LangName: "C++",
        LangExe: "cpp"
    }
]

myCode.forEach((item) => {
    console.log(item.LangExe);    
})

