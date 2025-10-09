const user = {
    username: "khushi",
    price: 999,

    welcomeMessage: function(){  //this-->current context
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);

// function chai(){
//     let username = "khushi"
//     console.log(this.username); //undefined
    
// }
// chai()

// const chai = function(){
//     let username = "khushi"
//     console.log(this.username); undefined
    
// }
// chai()

const chai = () => {
    let username = "khushi"
    console.log(this.username);
    
}
//chai()

//Syntax --> () => {}

//     const addtwo = (num1, num2) => {
// return num1 + num2
//     }
//     console.log((addtwo(3, 4)));



//implicit return type we can also use this
//const addtwo = (num1, num2) => num1 + num2
// const addtwo = (num1, num2) = (num1 + num2)
// console.log(addtwo(3, 4));

    
//if we have to return a object ---- will use paranthesis
const addtwo = (num1, num2) => ({username: "khushi"})
console.log(addtwo(3, 4));


// const myArr = [2, 5, 3, 5, 8]
// myArr.forEach(() => {})