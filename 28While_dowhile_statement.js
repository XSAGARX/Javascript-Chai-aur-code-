/*
// there are several types of loops 
let index = 0 
while (index <= 10) {
 //  console.log (`value of index is ${index}`);
    index = index + 2
}
// Another code: something is wrong there don't know what?

let system = 21
while (system <= 21) {
 //   console.log(`value of system is ${system}`);
    index =  system+2;
    
}

*/
// Using loops in array 

let myArray = ["rohan", "bunty", "kohli", "ms"];
let arr = 0
while (arr < myArray.length) {
    console.log(`value is ${myArray[arr]}`);
    arr = arr+1
    
}


// do while loop:

// so here this is the syntax of do while loop pretty easy yaha do while mei kaam pahle hota hai aur condition baad mei check hota hai
let score = 80

do {
    console.log(`Score is ${score}`);
    score++
// iss code kei o/p mei dekh sakte ho ki score = 80 de dia then usko o/p mei dikha dia condition check karne ki jarurat nahi hai     
}while (score <= 21);