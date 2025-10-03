const accId = 223242 // we can not change
let accEmail = "khushi@gmail.com"
var accPass = "1234"
accCity = "Hyd"
let accState;// it will give undefined
// not use const because state changes

//accId = 2; // not allowed
console.log(accId);

accEmail = "ac@gmail.com"
accPass = "3232323"
accCity = "pune"

console.table([accId, accEmail, accPass, accCity, accState])
/*
prefer not use var because of issue in block scope 
and functional scope

*/

//Which one is better?

// ✅ Use const by default — safer, avoids accidental reassignments.

// ✅ Use let when the value will change (loops, counters, reassignment).

// 🚫 Avoid var — it’s outdated and leads to bugs because of function scoping + hoisting.