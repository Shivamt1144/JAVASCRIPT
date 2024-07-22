// let myName="Shivam     "

// console.log(myName.length); //now this returns 11 though we can use trim then length to find the correct length but why not create a trueLength method of our own.


const myHero=["thor","spiderman"]

const heroPower={
    thor:'hammer',
    spiderman:'sling',

    getSpidyPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


//adding new property to object this will pass to all array,function, string etc
Object.prototype.shivam=function(){
    console.log(`Shivam is present in all objects`);
}

//adding a new property to array only, wont pass to objects
Array.prototype.heyShivam=function(){
    console.log("Inserted in array");
}


// heroPower.shivam()
// myHero.shivam()

myHero.heyShivam()  //works fine

// heroPower.heyShivam() //does not works as the property is inserted into array only


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()


// with the above example we've succesfully created an method