//Immediate Invoked Function Expressions(iife)

// function chai(){
//     console.log(`DB CONNECTED`);
    
// }
// chai()

// function chai(){
//     console.log(`DB CONNECTED`);
    
// }() this will give error


(function chai(){
    console.log(`DB CONNECTED`);
    
})()  //use paranthesis 

//global scopeke polution ko hatane ke liye iife ka use kiya
