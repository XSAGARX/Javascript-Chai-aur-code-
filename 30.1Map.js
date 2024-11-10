// here we see how map works and how we added 10 in each array number
const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNumbers.map((num) => {return num * 10 })

//here we are seeing map chaining method 

const newNums = myNumbers
// we can use this map multiple times there is no problem in that
                .map((num) => num *10 )
                .map(( num) => num +1) // yaha pe phle waala array follow nahi hoga yaha pe updated array aayega jaise 10,20,30,40 
                //updated kiya hua 10 kei saath multiply kiya hua 
                .filter( (num) => num >= 40)
                
                
 console.log(newNums);


// revise it and practice it otherwise you will forget it.
