//Math objects
console.log(Math)
console.log(Math.PI) // give value of PI
console.log(Math.E) // give value of Euler’s number.

// const len = 4.2 ;
// const len = 4.5 ;
const len = 4.7 ;
console.log(Math.round(len)) ; // rounds of to the nearest integer
console.log(Math.floor(len)) ; // give the value of the integer irrespective of decimal
console.log(Math.ceil(len)) ; // give the value of the integer with no decimal and if there is decimal it will return an integer +1 . if 7.7 it will return 8. 
console.log(Math.trunc(len)) // it removes te decimal and give the integer part

//generate random numbers
const random = Math.random() ;
console.log(random) // return random value b/w 0 and 1
//get a random number b/w 1 and 100
console.log(Math.round(random *100)) ;
