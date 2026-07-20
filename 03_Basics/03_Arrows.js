const user = {
    username: "Habib",
    price: 99,
    welcomeMsg: function() {
        // console.log(`${this.username}, Welcome to Website.`)
    }
}

user.welcomeMsg()
user.username = "Habib Tariq"
user.welcomeMsg()

// console.log("Output of this:", this); // Output: {}

// Interview Question:
// Global Object in Browser is "Window Object".

function chai() {
    let username = "Atif"
    // console.log(this);    
}
chai()  // Different Output


const chai = function() {
    let username = "Atif"
    // console.log(this.username);    
}
chai()


const chai = () => {
    let username = "Atif"
    // console.log(this);    
}
chai()


const addTwo = (num1, num2) => {
    return num1 + num2
}
// console.log(addTwo(3, 4));


// ---- Implicit Return ----
const addTwo = (num1, num2) => num1 + num2 
// console.log(addTwo(3, 4));

// Returning an Object
const objRet = () => ({Name: "Habib Bin Tariq"})
// console.log(objRet())

