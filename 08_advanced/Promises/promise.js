// Promises are used to handle the responses recieved from Async Operations
// it has three states can be chked in img "states.png"

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('\n---------------- Promise 1 ----------------');
        console.log('Aync Task 1');        
        resolve()
    }, 1000);
})

promiseOne.then(() => {
    console.log('Async Consumed');    
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('\n---------------- Promise 2 ----------------');
        console.log('\nAync Task 2');        
        resolve()
    }, 1000);
}).then(() => {
    console.log('Async Consumed');    
})

// ---------------- How data is Consumed by then through 'Resolve' ----------------
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('\n---------------- Promise 3 ----------------');
        resolve({
            name: 'Habib',
            e_mail: 'example@gmail.com'
        })
    }, 1000);
})

promiseThree.then( (user) => {
    console.log('\n',user);    
})


//  ---------------- Errors ---------------- 
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log('\n---------------- Promise 4 ----------------');
        let error = true
        if(!error) {
            resolve({
                name: 'Habib',
                e_mail: 'example@gmail.com'
            })
        } else {
            reject('ERROR: SOmething went WRONG!!!!!!')
        }
    }, 1000);
})

promiseFour
    .then((user) => {
        console.log(user);
        return user.name;
    })
    .then((name) => {
        console.log(name);    
    })
    .catch((e) => {
        console.log(e);    
        return e
    })
    .finally(() => {
        console.log('Operation Completed!');              
    })

// ---------------- Using Async Await ----------------
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('\n---------------- Promise 5 ----------------');
        let error = true
        if(!error) {
            resolve(
                {
                    username: 'JavaScript',
                    password: '123'
                }
            )
        } else reject('Error: Js Went Wrong.')                                
    }, 1000);
})

// 'async' is same as then() but it waits until the work gets done and then moves ahead otherwise get u an error in the meantime.
// Disadvantage: We can't handle catch() gracefully here and can't hadle errors directly.
async function consumedPromiseFive() {

    // If the following statements will be run without tryCatch then we'll get an error
    //              ⬇ 
    // const response = await promiseFive
    // console.log(response);    

    try {
        const response = await promiseFive
        console.log(response);    
    } catch (error) {
        console.log(error);        
    }
}

consumedPromiseFive()


// ---------------- JSON Data handling Using Async Await ----------------
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json() // await is used here because data conversion into JSON takes time.

        console.log('\n\n ---------------- Data using Async and await ---------------- \n', data);        
    } catch (e) {
        console.log('Error: ', e);        
    }    
}
getAllUsers()

// Using then and catch
console.log('\n\n ---------------- Data using then() and catch() ----------------');        
fetch('https://jsonplaceholder.typicode.com/users')  // we use then directly here cuz fetch returns a Promise
.then((response) => {
    return response.json();
})
.then((data) => console.log(data))
.catch((err) => console.log(err))


// for fetch inner working: https://youtu.be/Rive84an6Lc?t=622