//for each loop

const coding=["js","ruby","python","java","c++","swift"]

// coding.forEach( function (items){
//     console.log(items);
// }  )

coding.forEach( (items)=>{
    // console.log(items);
}  )

function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item,index,arr);
// }).

const myCoding=[
    {
        languageName:'JavaScript',
        languageFileName:'js'

    },
    {
        languageName:'Java',
        languageFileName:'java'

    },
    {
        languageName:'python',
        languageFileName:'py'

    },
]

myCoding.forEach((items)=>{
    console.log(items.languageFileName);
})