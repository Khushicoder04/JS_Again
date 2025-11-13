function SetUsername(username){
    //compplex DB calls
    this.username = username
    console.log("called");
    
}

function createUSER(username, email, password){
    SetUsername.call(this, username)

    this.emal = email
    this.password = password
}

const chai = new createUSER("chai", "k@gmail.com", "123")
console.log(chai);
