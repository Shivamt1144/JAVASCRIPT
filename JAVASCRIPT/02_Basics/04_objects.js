// const tinderUser=new Object() //ye singleton hai

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"xyz@hotmmail.com",
    fullname:{
        userFullName:{
            firstName:"Shivam",
            lastName:"Tripathi"

        }
    }
}
// console.log(regularUser.fullname.userFullName.firstName);\

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}

// to combine these objects
// const obj3={obj1, obj2} //object ke andr object deta hai
// const obj3=Object.assign({}, obj1, obj2)  //{} optional parameter hai, dena accha hai, gurantees ki combine hokar result aa jaega 


// mostly used spread method
const obj3={...obj1, ...obj2}
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
 //all this return array

//to check if the value is present 
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// desturcturing objects

const course={
    coursename:"JS",
    price:"999",
    courseInstructor:"Hitesh"
}

const{courseInstructor: instructor}=course
// console.log(courseInstructor);
console.log(instructor);



// ==================================API=======================
// json file
// written like objects
// {
//     "name":"Shivam",
//     "course":"engineering"
// }

// API also are written in arrays
// [
//     {},
//     {},
//     {}
// ]