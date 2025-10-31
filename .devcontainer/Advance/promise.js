//pending
//fullfill
//reject


//we consume promises with then, catch, finally
//creating a promise
const promiseOne = new Promise(function(resolve, reject){
    //do an async task
    //dbcalls, cryptography, network
    setTimeout(function(){
        console.log(('Async task is complete'));
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
    
})

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function() {
        resolve({username: "chai", email: "abs@gmail.com"})
    }, 1000);
})

PromiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "khushi", password: "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

promiseFour.then((user)=>{
console.log(user);
return user.username

}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = false;
        if(!error){
            resolve({username: "java", password: "123"})
        }else{
            reject('ERROR: java went wrong');
        }
    }, 1000);
})


async function consumePromiseFive(){
    try{
        const response = await promiseFive
    console.log(response);
    }
    catch(error){
console.log(error);

    }
}
consumePromiseFive()

//async function getAllUsers(){
//     try{
//     const response = await fetch('https://jsonPlaceholder.typicode.com/users')
//     const data = response.json();
//     console.log(data);
// }catch(error){
//     console.log("E: ", error);
    
// }
// }
// getAllUsers()

fetch('https://jsonPlaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => console.log(error));





//console.log(username);
