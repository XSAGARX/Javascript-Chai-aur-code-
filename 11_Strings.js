const emailId = "sagarsingh3b@gmail.com"
const GithubStatus = "45+"

console.log (`Hey guys My name is sagar singh and my email id is ${emailId} so here i am and my GithubStatus is ${GithubStatus}` );

// whathappend upthere is string interpolation here you merge the string by using backtic and curly braces 

const gameName = new String('sagarsingh');  // You can use ${} only with template literals, not normal strings.

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0,4) // so here 0 index will be selected but not the 4 before 4 will be selected 
console.log(newString);


// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings

const anotherString = gameName.slice(-8 , 4) // in slice "only" you can add -ve values 

console.log(anotherString);

const newStringOne = "  sagar  "
console.log (newStringOne);
console.log(newStringOne.trim());


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim  read it!!!

const url = "https://sagarsingh3b@gmail.com/sagar%20singh";

console.log(url.replace('%20', '_'));


// you have to practice string practi ce nit from the mdn 



