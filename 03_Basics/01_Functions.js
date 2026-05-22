function sayMyName() {
    console.log("H");
    console.log("A");
    console.log("B");
    console.log("I");
    console.log("b");
}

// sayMyName()

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

function loginUserMsg(username) {
    return `${username} just logged in`
}
console.log(loginUserMsg("Habib Tariq"));



