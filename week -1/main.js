//object literals

let user = {
    name: 'prem' ,
    age : 20 ,
    email : 'premrahi234@gmail.com',
    location : 'ghaziabad' ,
    subjects : ['maths' ,'physics' ,'chemistry' , 'biology']
} ; 

console.log(user) ;
console.log(user.name)

// we can also change values later
console.log(user.age)

user.age = 30 ;

console.log(user.age)

// we can also access the values with square brackets
console.log(user['email'])
user['email'] = 'premrahi454@gmail.com' ;
console.log(user['email'])

//we use square bracket when we need to use functions
const key = 'location' ;
console.log(user[key])

console.log(typeof user) // object


/// methods 