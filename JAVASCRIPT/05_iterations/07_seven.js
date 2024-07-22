const myNumber=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNumber.map((num)=> num+10)

//chaining
const newNums=myNumber
        .map((num)=>num*10)
        .map((num)=>num+2) //ye jo num hai ye upar wale map ka returned map hai
        .filter((num)=>num>20)


console.log(newNums);

