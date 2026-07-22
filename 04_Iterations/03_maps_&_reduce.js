// -------------- Maps --------------
const numbers = [1,2,3,4,5,6,7,8,9,10]
// console.log(
//     numbers
//     .map((n) => n*10)
//     .map((n) => n+1)
//     .filter((n) => n>100) 
// );

// -------------- Reduce --------------
const arr = [1, 2, 3]
// console.log(
//     arr.reduce(
//         (acc, currVal) => {  // acc = accumulator, currVal = Current Value
//             console.log(`acc: ${acc} and currVal: ${currVal}`);            
//             return acc + currVal; 
//         }, 0  // 0 is for starting value of accumulator
//     )
// );

// Shopping Cart
const shoppingCart = [
    {
        ItemName: "Js Course",
        Price: 1999
    },
    {
        ItemName: "Python Course",
        Price: 999
    },
    {
        ItemName: "Mobile Dev Course",
        Price: 12999
    }
]

// Using Reduce
console.log(
    "Using Reduce: ", shoppingCart.reduce(
        (acc, item) => {
            return acc + item.Price
        }, 0
    )
);

// Using Loop
let total = 0
shoppingCart.forEach(i => {
    total += i.Price
});

console.log(total);



