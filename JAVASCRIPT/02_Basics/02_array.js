const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros); 


// another method spread:
const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

//to wash out this piece of shit into a single array

const real_another_Array=anotherArray.flat(Infinity) //the infinity solves all, you can give number as well

console.log(real_another_Array);


//to check if it is an array

console.log(Array.isArray("Shivam")); //it is false
// to conver:
console.log(Array.from("Shivam")); //this will create an array
console.log(Array.from({name: "Shivam"}));  //interesting this will return empty array, hume batana padega ki array kiska banana hai, keys ya value ka



let score1=100
let score2=200
let score3=300

// to create array out of this
console.log(Array.of(score1, score2, score3));