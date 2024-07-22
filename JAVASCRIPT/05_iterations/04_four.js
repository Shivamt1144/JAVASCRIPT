const myObject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'
}

//forin

for (const key in myObject) {
    console.log(key);
        
    }
for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
        
    }


const programming=['js','rb', 'python', 'java', 'cpp']

for (const key in programming) {
    // console.log(programming[key]);
    }


const map1=new Map() // no repeated values it holds
map1.set("IN", "India")
map1.set("US", "USA")
map1.set("EU", "Europe")
    
for (const key in map1) {
    console.log(key); //iteration not possible
        
    }
