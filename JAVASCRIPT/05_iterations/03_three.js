// for of

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greeting="Hello World!"

for (const greet of greeting) {
    // console.log(greet);
}

// MAPS


const map1=new Map() // no repeated values it holds

map1.set("IN", "India")
map1.set("US", "USA")
map1.set("EU", "Europe")

// console.log(map1);

for (const [key, values] of map1) {
    // console.log(key, ':-', values);
}

const myObject={
    "Game1":"NFS",
    "Game2":"COD"
}

for (const [key, values] of myObject) {
    console.log(key, values); //throws error saying myObject is not iterable, though there are methods to iterate through objects
}