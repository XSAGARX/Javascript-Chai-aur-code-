// Object Literals 

const JsUser = {
    name : "Sagar Singh", // here name is keys and sagar singh is values 
    Age: "22",
    location: "bhubaneswar",
    email: "sagarsingh3b@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["monday", "saturday"]

}

console.log(JsUser); // so here you can access the objects in both the ways. 
console.log(JsUser.location);
console.log(JsUser["email"]);
console.log(JsUser["name"]);


// now we will learn how to freeze in objects 

JsUser.email= "sagarsingh3b@gmail.com";
Object.freeze(JsUser) // so here you can see the object is freexe now you have to practice the syntax for it. 
JsUser.email = "khamoshandmadhosh3@gmail.com";
// console.log(JsUser.email);

JsUser.greeting = function (){
    console.log("Hello JS user");

}

JsUser.greetingTwo = function(){
    console.log (`Hello JS user, ${this.name}`);

}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());





