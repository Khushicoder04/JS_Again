const user = {
    username: "khushi",
    logincnt: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("got user details from the database");
        //console.log(`Username: ${this.username}`);
        //console.log(this);
        
    }

}

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);

//constructor
// const promiseOne = new Promise()
// const date = new Date()      // new keyword is constructor, create a new context


function User(username, logincnt, isLoggedIn){
    this.username = username
    this.logincnt = logincnt
    this.isLoggedIn = isLoggedIn

    return this
}

const user1 = new User("Khushi", 12, true)
const user2 = new User("Ansh", 13, false)
console.log(user1);
console.log(user2);

