// object literals
const user={
    username:'Shivam',
    loginTime:8,
    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username:${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


//constructor function

function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn

    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }

    return this  //this is implicitly defined so likho ya na likho farak nahi hai but likh hi do
}

// const userOne=User("Shivam",12,true)
// const userTwo=User("Chai",11,false)
// console.log(userOne); //agar abhi userone print karwaya toh values overwrite ho jaengi toh to solve this problem use new keyword

const userOne=new User("Shivam",12,true)
const userTwo=new User("Chai",11,false)
console.log(userOne.constructor);



//new Keyword
//step1: as soon as we use new keyword an empty object is created called as instance
//step2: a constructor function is called due to new keyword
//step3: this keywords wale arguements isme inject ho jate hai
//step4: mil jate hai function ke andar