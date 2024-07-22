const email="s@shivam.ai"

if (email) {
    // console.log("Got the user email");
} else {
    // console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// some truthy values
// "0",'false'," ",{},[],function(){}

// to check empty array
// if (email.length===0) {
//     console.log("Array is empty");
    
// }

// to check empty object
const emptyObject={}

// if(Object.keys(emptyObject).length===0){
//     console.log("Object is empty");
// }




// Nullish Coalescing Operator (??) : null  undefined
let val1;
// val1=5??10
// val1=null??10 //print 10
// val1=undefined??10 //prints 15
// val1=null??10??15 //jo bhi first value milega wo assign ho jaega

// console.log(val1);

//ternary operator
// syntax
// condition?true:false
const iceTeaPrice=100
// iceTeaPrice>=80 ? console.log("Price of Ice Tea is less than 80"):console.log("more than 80");