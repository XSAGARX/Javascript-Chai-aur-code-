// primitive data types 

// NNSSBBU: null, number, string, symbol, BigInt, boolean, undefined 


const score = 100;
const scoreValue = 100.3; // here decimal is also a number 

const isLoggedIn = false; // here it is situation based yes or no 

const outsideTemp = null; // null only means vacant 

// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution.

const id = Symbol("123");
const EmailId = Symbol("123");

console.log (id === EmailId ); // here it will not show equals because id and email id will also be calculated 

// refrence (Non primitive)

// Array, objects, functions 

const heros = ["batman", "shaktiman", "spiderman"];
let myObj = {
    name: "sagar", 
    age: 22, 

}

const myFunction = function (){
    console.log("Hello world ");

}

console.log(typeof myFunction);

/*
Primitive DataTypes:


1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

6.Symbol (ES6): it is mostly used used to find uniqnece.

7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.

 Refence (Object Data Types):

1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

4.Date: Represents dates and times.

5.RegExp: Represents regular expressions for pattern matching.



lets talk about some Range of Primitive DataType:

    1.Number:
        Represents both integers and floating-point numbers.
        Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
        Smallest Increment: 2^(-52).

    2.String:
        Represents a sequence of characters.
        No specific range limit, but practical limits depend on memory and system resources.

    3.Boolean:
        Represents true or false.
        Only two possible values: true and false.

    4.Undefined:
        Represents a variable that has been declared but hasn't been assigned a value.
        It has only one possible value: undefined.

    5.Null:
        Represents the intentional absence of any object or value.
        It has only one possible value: null.

    6.Symbol (ES6):
        Represents a unique and immutable value.
        No specific range limit.

    7.BigInt (ES11):
        Represents large integers that cannot be represented by the Number type.
        The range is practically unlimited and depends on available memory.
*/


// *****************************************************************************************************************


// stack (Primitive), Heap (Non-primitive)

// whenever we are taking any primitve data types then it's always stored in stack and here data gets copied from the previous place. 

// heap: you get refrence so whatever changes you will make it will be with the original data 
let myYoutubeName = "sagarsingh"
let anothername = myYoutubeName 
anothername = "Chaiaurcode"

console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    name: "raghav",
    roll: "2106245",
    salary: "150000"
}

let userTwo = {
    emailId : "sagarsingh3b@gmail.com",
    address : "newaji tola chowk by pass road"

}

console.log (userOne);
console.log (userTwo);