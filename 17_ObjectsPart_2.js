// const tindrerUser = new Object() // this is a singleton object 
const tinderUser = {} // this is non-singleton object 

tinderUser.id = "123abc";
tinderUser.name = "sagar singh";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

const regularUser = {
    email: "sagarsingh3b@gmail.com",
    fullname: {
        username: {
            firstname: "sagar",
            lastname: "singh"
        }
    }
}

console.log(regularUser.fullname.username.firstname); // to acceess objects inside objects you can use full stop for it. 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1 , obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = {...obj1, ...obj2, ...obj4} // it is same like an array concept "spread operator" 90 percent of the time you will use it this only 
console.log(obj3); // it acts like an array 
// read about the objects from the mdn for deep description. 
 
const users = [

    {
        id : 1,
        email : "sagarsingh3b@gmail.com"
        
    },
    {
        id : 1,
        email : "sagarsingh3b@gmail.com"
        
    },
    {
        id : 1,
        email : "sagarsingh3b@gmail.com"
        
    }

]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));

 console.log(tinderUser.hasOwnProperty('isLogged'));

 

