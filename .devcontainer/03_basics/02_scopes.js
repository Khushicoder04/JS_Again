// let a = 10
// const b = 20
// var c = 30


//var c = 300
let a = 300
//this curly bracket is scope
if(true){   //block scope outside global scope
    
    let a = 10
    const b = 20
//console.log("INNER: ", a);

}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

//console.log(a);
//console.log(b);
//console.log(c);


//nested scope
function one(){
    const username = "Khushi"

    function two(){
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website);
    two()
}
one()

if(true){
    const username = "khushi"
    if(username == "khushi"){
        const website = "youtube"
        //console.log(username + website);
        
    }
    //console.log(website);
    
}
//console.log(username);


//++++++++++++++++interesting++++++++++++++++++

function addone(num){
  return num + 1
}
addone(5)

const addtwo = function(num){
    return num + 2
}
addtwo(5)