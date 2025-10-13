const userEmail = "k@gmail.com"

if(userEmail){
    console.log("got user email");
    
}else{
    console.log("do not have");
    
}

//falsy values

// false, 0, -0, BigInt, "", null, undefined, NaN

//truthy value

//"0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }


// const empObj = {}

// if(Object.keys(empObj).length === 0){
//     console.log("object is empty");
    
// }


//Nullisg Coalescing OPerator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10



console.log(val1);

//Terniary Operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less") : console.log("more");

