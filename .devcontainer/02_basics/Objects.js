//declare objects--> literals, constructor
//singleton
//object.create

//object literals, in object we can define key and values both

const mySym = Symbol("key1")




const JsUser = {
    name: "Khushi", //in this name is processed as string
    "full name": "Khushi Rai", // we cant access this using dot
    [mySym]: "MyKey1", //use it like a symbol write in a square bracket
    age: 18,
    location: "Hyd",
    email: "kh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

//how to change
JsUser.email = "a@gmail.com"
///Object.freeze(JsUser)
JsUser.email = "ansh@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
