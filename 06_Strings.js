const name = "Habib"
const repoCount = 10

// console.log(name + repoCount + "Value");

// String Interpolation
console.log(`My name is ${name} and I've total ${repoCount} repos on GitHub.`);

// Actual Declaration of String
const gameName = new String('Habib-H-C')
console.log(gameName);

console.log(gameName[0]);
console.log(gameName.__proto__);

// UpperCase function
console.log(gameName.toUpperCase());

// Position of a Character in a String
console.log(`Character finding at 2th position: ${gameName.charAt(3)}`);

// Position of a specific character
console.log(`Finding position of a character "b": ${gameName.indexOf('b')}th position`);

// Sub String
// --> Doesn't support Negative Values
const newString = gameName.substring(0, 4)
console.log(`Sub-String: ${newString}`);

// Slicing
// --> It supports Negative Values
const anotherString = gameName.slice(-1)
console.log(`Slicing: ${anotherString}`);

// Trim Function
const newStringone = "  Habib  "
console.log("\nTrim Functrion:-");
console.log(newStringone);
console.log(`Trim: ${newStringone.trim()}`);
console.log(`Trim Start: ${newStringone.trimStart()}`);
console.log(`Trim End: ${newStringone.trimEnd()}`);

// Replace Function
const url = 'https://habibtariq.com/habib%20tariq'
console.log(url.replace('%20', '-'));

// Includes Method
console.log(url.includes('habib'));

// Split Method 
console.log(gameName.split('-'));














