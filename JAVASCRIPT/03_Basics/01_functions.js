//function definition

function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("M");
}

//function calling
// sayMyName()


function addTwoNumbers(num1, num2){
        console.log(num1+num2);
}

// addTwoNumbers(3,4)

// note num 1 and num 2 are called parameters and 3,4 are arguements

// we can store it also
// const result=addTwoNumbers(3,5)

// but if we console log result it will give undefined, function se kya wapis bheja,console toh bs likha hai
// console.log(result);


//now return ka concept

function addTwoNumbers(num1, num2){
    let result= num1+num2
    return result
}
const result=addTwoNumbers(3,5)

// console.log("Result:", result); //now the function returned the value 8\

function loginUserMessage(username="sam"){ //sam here is default value, jab kuch print nahi hoga tab ye hoga
    if(username=== undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Shivam"));
// console.log(loginUserMessage());


// when we don't know how many values are to come, we use rest operator
function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,600));//returns an array


//objects in function

const user={
    username:"Shivam",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam",
    price:"399"
})


//arrays in function
const myNewArray=[200, 400, 100, 600]

function returnSecondValue(getarray){
    return getarray[1]

}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));