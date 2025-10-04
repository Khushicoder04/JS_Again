//arrays
//copy operations--shallow copy-->share the same reference point(change in original array also)
//deep copy do not  share the same reference

const myArr = [0, 1, 2, 3, 4, 5]
const myhero = ["shaktiman", "spiderman"]

const myArr2 = new Array(1, 2, 3, 4)

//console.log(myArr[1]);

//Array Methods

// myArr.push(6);
// myArr.pop();

// myArr.unshift(0) // one more 0
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(typeof newArr);// converted into string

//console.log(myArr);

//slice, splice

//console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
// console.log("c ", myArr);
// console.log(myn2);

//Arrays Part 2

const marvelHeros = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

//marvelHeros.push(dc);
// console.log(marvelHeros);//array inside array
// console.log(marvelHeros[3][1]);

// const allheros = marvelHeros.concat(dc)
// console.log(allheros);

// const allheros =[...marvelHeros, ...dc] //knowns aas spread operator
// console.log(allheros);


