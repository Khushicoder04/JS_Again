const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

console.log(Math.random()); //give value between 0 t0 1
console.log(Math.floor(Math.random() * 10) + 1); // give value from 1 t0 9

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min)