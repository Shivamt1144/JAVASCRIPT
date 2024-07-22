// objects when created with constructor is singleton :agle me h

// object literals

const mySym=Symbol("key1")

const jsUser={
    name:"Shivam",
    //to use symbol write
    [mySym]:"mysym1",
    age:"22",
    "full Name":"Shivam Tripathi",
    address:"Varanasi",
    email:"shivam@google.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["full Name"]); //we cannot access full Name with . operator
// console.log(jsUser[mySym]); //the data type is symbol


// to change the values
jsUser.email="shivam@chatgpt.com"
// console.log(jsUser.email);
//to avoid any change
// Object.freeze(jsUser) //now we cannot change the value
jsUser.email="shivam@microsoft.com" //this does not reflects
// console.log(jsUser);


//add function to the object

jsUser.greeting=function(){
    console.log("Le add kar diya function");
}

// to access the element from the jsUser object
jsUser.greetingTwo=function(){
    console.log(`Hello JS User,${this.name}`);
}


console.log(jsUser.greeting); //function execute nahi hota, function returnback aata hai
console.log(jsUser.greeting()); 
console.log(jsUser.greetingTwo()); 
