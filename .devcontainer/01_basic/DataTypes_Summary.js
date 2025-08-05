// Primitive

// 7 types: String, Number, Boolean, Null, undefined, Symbol,
// BigInt

// in js we won't define language
const score = 100 
const scoreVlaue = 100.3

const isLoggedIn = false
const outsideTemp = null;
let uderEmail;

const id = Symbol('123')
const anotherid = Symbol('123')
//console.log(id === anotherid); //false

//const bigNumber = 232434556678455677888n // bigInt

// Reference(Non Primitive)

// Arrays, Objects, Functions

const heros = ["khushi", "yashi", "harsh"];
let myObj = {
    name: "khushi",
    age: 22,
}

const myFun = function(){
    console.log("Hello World");
}

console.log(typeof myFun);
