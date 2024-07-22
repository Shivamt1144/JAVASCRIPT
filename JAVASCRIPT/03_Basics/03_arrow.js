const user={
    username:"Shivam",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`); //this is used to refer current context
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username="jack"
// user.welcomeMessage()

// console.log(this); // this returns empty object in node but returns window in browser


// function chai(){
//     console.log(this);
// }
// chai() // gives lot of output


// function chai(){
//     let username="Shivam"
//     console.log(this.username); //can't use this in fuction, only used in objects
// }

// chai()


//+++++++++++++++++ ARROW FUNCTIONS  +++++++++++++
const chai = () => {
    let username="Shivam"
    console.log(username)
    console.log(this)  //gives empty objects
}
// chai() 


// const addTwo =(num1, num2) => {
//     return num1+num2
// }
// console.log(addTwo(2,3));


//implicit return way 
// const addTwo =(num1, num2) =>  num1+num2
// const addTwo =(num1, num2) =>  (num1+num2) //can also be written with paranthesis

const addTwo =(num1, num2) => ({username:"Shivam"}) //objects bina parenthesis ke undefined return karenge
console.log(addTwo(2,3));