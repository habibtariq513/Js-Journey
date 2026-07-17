const user = {
    username: "Habib",
    price: 99,
    welcomeMsg: function() {
        console.log(`${this.username}, Welcome to Website.`)
    }
}

user.welcomeMsg()
user.username = "Habib Tariq"
user.welcomeMsg()

console.log("Output of this:", this); // Output: {}

// Interview Question:
// Global Object in Browser is "Window Object".
