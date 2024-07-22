let a=300 //global scope
if (true){
    let a=10
    const b=20
    // var c=30
    // console.log("Inner:",a);
}

// console.log(a); //this will not produce an output
// console.log(b); //this will not produce an output
// console.log(c); //but this gives an output and this is the problem

// after writing let a=300, we will always get 300 as the loop's a won't come due to block scope
// console.log(a);


function one(){
    const username="Shivam"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website); //throws error as it is out of scope

    two()
}

// one()


if(true){
    const username="Shivam"
    if(username==="Shivam"){
        const website=" Youtube"
        // console.log(username+ website);
    }
    // console.log(website); //throws error scope problem
}

// console.log(username); //throws error scope problem


// +++++++++++++ Interesting +++++++++++
console.log(addone(5)); //can write also like this
function addone(num){ //basic function
    return num+1
}
// addone(5)


addtwo(5) //throws error kyu ki declare ke baad value hold bhi kiya hai i.e. hoisting
const addTwo=function(num){ //ye bhi function hi hai par isko kabhi kabhi expression bhi kehte hai
    return num+2
}
// addtwo(5)