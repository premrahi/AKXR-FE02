const arr = [2, 4, 6, 8, 10];
//double -  [4, 8, 12, 16, 20]
//triple -  [6, 12, 18, 24, 30]
//binary - ['10', '100', '110', '1000', '1010']

//these are the transformations that are done with the help pf map function

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

function binary(x){
    return x.toString(2) ; // this converts a number into its binary
}


const output = arr.map(binary);


const output2 = arr.map((x)=>{
    return x.toString(2) ;
}) // this is also valid syntax and works exactly same as the above approach
 //we can also cut it short
const output3 = arr.map( x=> x.toString(2) );

console.log(output);
console.log(output2) 
console.log(output3) 

// this is the basic working of map function
// it takes each value of the array do some transformation and map them to their positions


const user = [
  {firstName:'prem' ,lastName:'Rahi' , age:20} ,
  {firstName:'akshay' ,lastName:'Rahi' , age:56} ,
  {firstName:'shahrukh' ,lastName:'Khan' , age:59} ,
  {firstName:'ranveer' ,lastName:'singh' , age:36}
];

// list of full name 
//["prem rabi" ,"akshay rahi","shahrukh khan" ,"ranveer singh"]

const out = user.map(x=>{
  return (x.firstName + " " + x.lastName)
})
console.log(out)