const name="Shivam"
const repoCount=4

// console.log(name+repoCount+ "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('Shivam-Tripathi')
console.log(gameName[0]);
console.log(gameName.__proto__); //to access prototype

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));
const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(0,4)
console.log(anotherString);

const newStringOne="     Shivam"
console.log(newStringOne);
console.log(newStringOne.trim());

// trim start and trim end are also there


const url="https:hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));