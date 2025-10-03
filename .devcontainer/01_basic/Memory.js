//Stack(Primitive), Heap(Non-Primitive)

let myYoutubeNmae = "KhushiCoder"

let anothername = myYoutubeNmae
anothername = "KhushiCode"

console.log(anothername);
console.log(myYoutubeNmae);

// heap we get a reference what ever changes we do in the original value
let user = {
    email : "abc@gmail.com",
    upi : "abc@ybl"
}

let userTwo = user

userTwo.email = "k@gmail.com"

console.log(user.email);
console.log(userTwo.email);


