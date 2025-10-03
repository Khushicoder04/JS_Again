const name = "Khushi"
const repoCount = 10

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//we can use method also int this above form.

const gameName = new String('Khushi-rai')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);// it can take negative value also
console.log(anotherString);

const newStringOne = "   Khushi   "
console.log(newStringOne);
console.log(newStringOne.trim());