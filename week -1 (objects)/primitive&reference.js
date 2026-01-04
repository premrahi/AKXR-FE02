// primitive

let scoreOne = 50 ;
let scoreTwo = scoreOne;

console.log(`score one is ${scoreOne}` , `score Two is ${scoreTwo}`)
scoreOne = 100 ; 
console.log(`score one is ${scoreOne}` , `score Two is ${scoreTwo}`)

// reference (works with pointer)

const userOne = {name : 'prem' ,age: 20} ;
const userTwo = userOne ;

console.log(userOne , userTwo) 

userOne.age = 10 ;
// data gets changed for both 
console.log(userOne , userTwo) 
