// for of 

//  ["", "", ""] 3 diff types of strings here 
// [{}, {}, {}] 3 diff types of strings are here 

const arr = ["bihar", "haryana", "delhi", "banglore", 12] 

for (const num of arr) { // syntax (const iterator of object) 
   // console.log(num);
    
}

const greetings = "mahamtma Gandhi"

for (const greet  of greetings) {
    // console.log(greet);
    
}

// Maps: yei hamesha unique values ko leta hai same value hone se run bhi nahi karta hai 
// map iterable nahi hote hai toh issme iteration nahi hota hai 
const map = new Map()
map.set('IN', "India")
map.set('Fr', "France")
map.set('Gr', "Germany")
// console.log(map);

for (const [key, value] of map){
    console.log(key, ':-', value);
    
    
}
