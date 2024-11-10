/*
const coding = ["js", "ruby", "java", "python"]
const values = coding.forEach((item) => {
  //  console.log(item);
    return item // for each doesn't return any value 
})
// console.log(values);

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter((num)=> num > 4)
// console.log(newNums);

const newNums = []
myNums.forEach ((num) => {
    if(num>4){
        newNums.push(num)
    }
})
// console.log(newNums);
*/

const books = [ 
    {
        title: 'book one', genre:'fiction', publish: 1981, edition: 2002
    },
    {
        title: 'book 2', genre:'science', publish: 1982, edition: 2004
    },
    {
        title: 'book 3', genre:'history', publish: 1980, edition: 2000
    },
    {
        title: 'book 4', genre:'social science', publish: 1981, edition: 2057
    },
    {
        title: 'book 5', genre:'maths', publish: 1981, edition: 1234
    },
    {
        title: 'book 6', genre:'history', publish: 1986, edition: 2045
    }
    ];
    
    let userBooks = books.filter (  (bk) => bk.genre === 'History' )
    console.log(userBooks);
    
   userBooks = books.filter ((bk)=> {return bk.publish >= 1980})
    console.log(userBooks);
    
    // something's are wrong here try to fix it code is not running 