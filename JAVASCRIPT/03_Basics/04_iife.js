// Immediately Invoked Function expression (IIFE)
// **********Global scope ke pollution i.e declration se problem hoti hai, uske pollution ko hatane ke liye IIFE use hota hai**********

(function chai(){
    console.log(`DB CONNECTED`);
})();
//  note two or more IIFE requires semicolon
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})("Hitesh")

