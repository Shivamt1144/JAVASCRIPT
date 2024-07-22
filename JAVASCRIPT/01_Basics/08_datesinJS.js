//Dates

let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myNewDate= new Date(2023, 0, 23, 5, 3)
// let myNewDate= new Date(2023, 0, 23)
// let myNewDate= new Date("2024-01-28")
let myNewDate= new Date("01-14-2024")
// console.log(myNewDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp); //returns in miliseconds
// console.log(myNewDate.getTime());

// //to get value in seconds
// console.log(Math.floor(Date.now()));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay()); //gives the day starting sunday from 0
console.log(newDate.getUTCDate());



// most used property
console.log(myDate.toLocaleString('default',{
    weekday:"long"
    // and there are others too

}));
