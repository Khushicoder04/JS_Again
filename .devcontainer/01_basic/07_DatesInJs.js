//dates represent a single moment in a a platform independent format

let myDate = new Date();
//console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //object

//let myCreatedDate = new Date(2023, 9, 4)// months start from 0 in javascript.
//console.log(myCreatedDate.toDateString()); //Wed Oct 04 2023

//let myCreatedDate = new Date(2023, 9, 4, 5, 3)
//console.log(myCreatedDate.toLocaleString());//10/4/2023, 5:03:00 AM

let myCreatedDate = new Date("09-04-2025") // in yy-mm-dd months start from one
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Date.now()/1000); // to sec but it will give decimal values also
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);

//`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})
