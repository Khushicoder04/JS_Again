// console.log("K");
// console.log("H");
// console.log("U");
// console.log("S");
// console.log("H");
// console.log("I");


// function sayMyName(){
// console.log("K");
// console.log("H");
// console.log("U");
// console.log("S");
// console.log("H");
// console.log("I");
// }

//sayMyName()


// function addTwoNum(num1, num2){ //parameters
//     console.log(num1 + num2);
// }
//addTwoNum(3, 4) //arguments
//we can also do
// const res = addTwoNum(3, 5)
// console.log("Result:", res);//undefined

function addTwoNum(num1, num2){ //parameters

    let res = num1 + num2
    return res;
    //return num1 + num2
}

const res = addTwoNum(3, 5);

//console.log("Result: ", res);

function loginUserMessage(username){
    if(username == undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Khushi"))
//console.log(loginUserMessage());//undefined just logged in

function calculateCartprice(...num1){ //rest operator
    return num1
}

//console.log(calculateCartprice(200, 300, 400))

const user = {
    username: "khushi",
    price: 199

}

function handleObject(anyObject){
  console.log(`username is  ${anyObject.username} and price is ${anyObject.price}`);
  
}
//handleObject(user)
handleObject({
    username: "ansh",
    price: 399
})

const mynewArray = [200, 300, 400, 600]

function returnSecValue(getArray){
    return getArray[1]
}
//console.log(returnSecValue(mynewArray));
console.log(returnSecValue([200, 300, 400, 600]));

