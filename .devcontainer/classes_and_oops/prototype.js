// let myName = "Khushi     "
// console.log(myName.truelength); //want a method to to get actual length


let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getspiderpower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.khushi = function(){
    console.log(`hitesh is present in all objects`);
    
}
Array.prototype.heyKhushi = function(){
    console.log(`Hitesh says hello`);
    
}

//heroPower.khushi()
myHeros.khushi()
myHeros.heyKhushi()
// heroPower.heyKhushi()

//inheritance

const User = {
    name: "khushi",
    email: "k@google.com"
}

const teacher = {
    makevedio: true
}

const tsupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignement: 'JS assignment',
    fullTimme: true,
    __proto__: tsupport
}

teacher.__proto__ = User

//modern Syntax
Object.setPrototypeOf(tsupport, teacher)

let anotherUsername = "khushiCode     "

String.prototype.trueLength = function(){

console.log(`${this}`);
console.log(`${this.name}`);
console.log(`true length is ${this.trim().length}`);

}
anotherUsername.trueLength()
"Khushi".trueLength()
"iceTea".trueLength()