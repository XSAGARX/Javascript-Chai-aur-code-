const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "sagar"

}

// course.courseInstructor 

const {courseInstructor: instructor} = course 
// console.log(courseInstructor);
console.log(instructor);

/*
const navbar = ({company}) => {
                                  // this is how we destructure in js this concept will also be used in react. 
}
navbar(company = "sagar")
*/

//Api stands for application programming interface  It's a set of rules and protocols that allow different software applications to communicate

// and interact with each other.concept and here we will also talk about the json 

/*
{
    "name" : "sagar", 
    "coursename": "js in hindi",
    "price": "free"

}

whenever you see such type of code like upthere then don't you think that it is a objects it can also be a array 

 in json here keys are also a string and values are also a string     

 for deeper concepts you also need to learn through the documents so go through mdn docs 
 */