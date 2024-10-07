// Array 

const myArr = [0,1,2,3,4,5]; // Array indexing starts from zero 
const myHeros = ["shaktiman", "batman"];

console.log (myArr, myHeros);

const myArr1 = new Array(1,2,3,4)

console.log (myArr[1]);

// shallow copy: A shallow copy of an object is a copy whose properties share the same references 
// (point to the same underlying values) as those of the source object from which the copy was made.);

// deep copy: A deep copy of an object is a copy whose properties do not share the same references
// (point to the same underlying values) as those of the source object from which the copy was made

//+++++++++++++++++++++++++++++++++++Array Methods++++++++++++++++++++++++++++++++++++++++++++

myArr.push(6);// it also adds element in the end of the array 
console.log(myArr);

myArr.push(7); // it adds element in the end of the array 
console.log(myArr); 


myArr.unshift(9) // it adds element in starting of the array. for short adding you can add but not for too long array
console.log(myArr);

myArr.shift(10)
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join();

// slice and splice 

console.log("A", myArr);

const myn1 = myArr.slice(1,3);

console.log (myn1);

console.log ("B", myArr);

const myn2 = myArr.splice(1,3)
console.log ("C", myArr);
console.log(myn2);



