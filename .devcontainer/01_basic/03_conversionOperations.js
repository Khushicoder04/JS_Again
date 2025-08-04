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
