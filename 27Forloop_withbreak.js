// for loop 
// how to read this loop till first semi colon it is variable declared and in next semi colon condition is checked and then the process goes to 
// next line and then again it comes to index++ and from here updation takes place. 

for ( let i = 0; i < 10; i++){ // o/p:  till 9 
    const element = i;
 //   console.log (element);

     // this element is only valid inside the block scope outside scope it will not work 
}


for (let i =0; i<=10; i++){
    const element = i;
    if (element === 5) {
        console.log("5 is best number");
    }

 //   console.log(element);

}

for (let i = 0 ; i <= 10; i++){
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++){
        console.log(`Inner loop values ${j} and inner loop ${i}`);
         console.log(i + '*' + j + '=' + i * j); // this prints the table from 0 to 10 

    }
}