const button = document.querySelectorAll('.buttons');// all the buttons are accessed here
const body = document.querySelector('.body'); // body is accessed here

button.forEach(function(button){
    console.log(button);
    addEventListener('click', function (e) { // here event is added anytype of event will be notriced here. 
console.log(e.target);
if (e.target.id == "grey") {
    body.style.backgroundColor = e.target.id;  
}

if (e.target.id == "white") {
    body.style.backgroundColor = e.target.id;

}

if (e.target.id == "blue") {
    body.style.backgroundColor = e.target.id;
}

if (e.target.id == "yellow") {
    body.style.backgroundColor = e.target.id;

}
    });
});
