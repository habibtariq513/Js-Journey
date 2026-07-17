const user = {
    username: "Habib",
    price: 99,
    welcomeMsg: function() {
        console.log(`${this.username}, Welcome to Website.`)
    }
}

user.welcomeMsg()