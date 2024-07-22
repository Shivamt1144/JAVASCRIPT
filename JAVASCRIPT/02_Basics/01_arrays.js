//array declaration

const myArr=[1,2,3,4,5]
const myHeros=["Shaktiman", "Naagraj"]
const myArr2=new Array(1,2,3,4,5)

// console.log(myArr);
// console.log(myHeros[1]);


// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0) //adds the element at the start of the array
// myArr.shift() //removes the first element
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9)); //returns -1 as the value 9 is not present

// const newArr=myArr.join() //the values will be the same but the datatype will be string
// console.log(typeof newArr);

//slice, spice

console.log("A", myArr);
const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2=myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);


//splice manipulates the original array whereas the slice does not