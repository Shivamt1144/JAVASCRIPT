const score=400
// here the js automatically decides that the datatype is number

// but we can explicitly decide the datatype

const balance=new Number(100);

// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //gives answer to two decimal digits

const otherNumber=23.9876
const otherNumber1=123.9876

// console.log(otherNumber.toPrecision(3)); //Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
// console.log(otherNumber1.toPrecision(4));


const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN')); //separates by comma default by US but can use indian as in bracket

// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MAX_SAFE_INTEGER);
// for more write number in inspect


// ++++++++++++++  MATHS +++++++++++

console.log(Math);

console.log(Math.abs(-4)); //converts negavtive to positive
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.4));
console.log(Math.min(3,4,5,64,8,1));
console.log(Math.max(3,4,5,64,8,1));


//most used case
console.log(Math.random()); //returns random number between 0 to 1
// we can manipulate the value as well
console.log(Math.round(Math.random()*10)); //to avoid 0 as the output we can add +1 after 10


//Trick:formula for a range
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+ 1))+min);