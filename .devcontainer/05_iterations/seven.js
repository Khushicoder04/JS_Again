const myNums = [1, 2, 3]

// const myTot = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
    
//     return acc + currVal
// }, 0)

const myTot = myNums.reduce((acc, curr) => acc + curr, 0)
console.log(myTot);


const shoppingCart = [
    {
        itemName: "py course",
        price: 2999
    },
    {
        itemName: "js",
        price: 3999
    },
    {
        itemName: "java",
        price: 2009
    },
    {
        itemName: "data scince",
        price: 4999
    },
]

const price = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(price);
