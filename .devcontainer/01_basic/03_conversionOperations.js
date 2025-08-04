let score = "33abc" //null->0, undefined->nan, true->0, khushi->nan
console.log(typeof score);
console.log(typeof(score));

let valueNum = Number(score)
console.log(typeof valueNum);
console.log(valueNum);

// "33" => 33
// "33abc" => NaN
// true => 1, flase => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNm = 33
let StringNum = String(someNm)
console.log(typeof StringNum);

//****************** Operations ****************

let value = 3
let negValue = -value
console.log(negValue);

//console.log(2**3) => 2 to the power 2

let str1 = "hello"
let str2 = " khushi"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2");// 12
console.log("1" + 2 + 2);//122
console.log(1 + 2 + "2");//32

console.log(+true); //1
console.log(+"");//0

let gameCounter = 100
//gameCounter++;//101
++gameCounter;//101
console.log(gameCounter);


