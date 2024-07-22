//if

const isUserLoggedIn=true

if(isUserLoggedIn){
    console.log("lalalala");
}

// <, >, <=, >=, ==, ===, !=, !==

const balance=1000
// if(balance>500) console.log("Haa haa chalega");

//nested if
if (balance<500) {
    // console.log("balance less than 500");
}else if(balance<750){
    // console.log("balance less than 750");
}else{
    // console.log("less than 1200");
}

const UserLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(UserLoggedIn && debitCard){
    console.log("Allow to buy the course");
}

if(loggedInFromEmail||loggedInFromGoogle){
    console.log("User Logged In");
}