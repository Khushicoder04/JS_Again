//const coding = ["js", "ruby", "java", "pyhton", "cpp"]

//const val = coding.forEach((item) => {
//console.log(item);
// return item // thean also undefined
// })
//console.log(val); //it will give undefined so we have to return it manually
// foeach loop do nit return 

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((num) => num > 4)
// console.log(newNums);

//another method to write

 const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//    return num > 4
// })
// console.log(newNums);// it will return [] so we need to write return 

const newNums = [];
myNums.forEach((num) => {
    if(num > 4){
        newNums.push(num);
    }
})
console.log(newNums);
