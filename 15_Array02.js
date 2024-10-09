const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];
const indian_heros = ["padman", "shaktiman"];

const all_heros = (marvel_heros).concat(dc_heros).concat(indian_heros);
// console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros, ...indian_heros];

/* The spread operator (...) is a powerful syntax in
 JavaScript that allows you to expand an iterable (like an array or string) into individual elements within another expression.

 */

// console.log(all_new_heros);

const another_array = [1,2,3, "sagar", ["dj_waley", 2106245, "singh", [45,85,96,32, ["mr.rounak", "american", 1,2,3] ]]];

const real_another_array = another_array.flat(4) // here you can write the depth in which it should be solved or the other thing
// you can write is infinity 

// console.log(real_another_array);


// Another example of flat array used 

const natural_number =[1,2,3,4,5,[6,7,8,9,[10,11,12]]];
const real_natural_number = natural_number.flat(3);
// console.log(real_natural_number);


//it tells whether it is array or not 
console.log(Array.isArray("sagar"));

// it makes the array from the given i/p.
console.log(Array.from("Sagar Singh"));


console.log(Array.from({name: "Sagar Singh"})); // interesting. 

let score1 = 500;
let score2 = 500/4;
let score3 = 2100/7;

console.log(Array.of(score1, score2, score3));



