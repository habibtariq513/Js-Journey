function sayMyName() {
    console.log("H");
    console.log("A");
    console.log("B");
    console.log("I");
    console.log("b");
}



// function addTwoNum(num1, num2) {
//     console.log(`Sum: ${num1 + num2}`);    
// }

// addTwoNum(4, "6")
// addTwoNum(4, null)
// addTwoNum(4, "a")
// addTwoNum(4, 5)

function addTwoNum(num1, num2) {
    return num1 + num2    
}

const result = addTwoNum(4, 5)
console.log(`Result: ${result}`);

console.log("\n");


function loginUserMsg(username) {
    if(!username) {
        console.log(`Plz Enter Username`);        
        return
    }
    return `${username} just logged in`
}

console.log(`With Arg: ${loginUserMsg("Habib Tariq")}`);
console.log(`Without Arg: ${loginUserMsg()}`);

function calculateCartPrice(val1, val2, ...price) {
    return val1
}

console.log(calculateCartPrice(20, 30, 400));

// ========= Objects passing in Functions =========

console.log("\n========= Objects passing in Functions =========");
const user = {
    Username: "Habib",
    price: 199
}

function handleObj(anyObj) {
    console.log(`Username is ${anyObj.Username} and Pricec is ${anyObj.price}`);    
}

handleObj(user)
/* 
handleObj({
    Username: "Habib",
    price: 199
}) --> We can alos pass the whole Object in this way too. 
*/

// ========= Arrays passing in Functions =========

console.log("\n========= Arrays passing in Functions =========");
const newArray = [200, 300, 100, 22]

function handleArray(anyArr) {
    console.log(`Array Elemet: ${anyArr[1]}`);
}

handleArray(newArray)
// handleArray([200, 300, 100, 22])  --> We can alos passs the whole Array in this way too.




















