const arr = [5, 1, 6, 2, 4];

// reduce function in simple terms is a function that returns a single value for a whole pack of array after doing some operation

function totalSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(totalSum(arr));

// we can also calculate it with help of reduce function.

//reduce function takes 2 argument(acc , curr){} , initial value of acc (0 here)
//acc accumulates all the curr value for entire array , and curr goes to all the index of array

const output = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

console.log(output);

//finding maximum in an array
// function maximum(arr){
//     let maxi = Number.MIN_VALUE ;

//     for(let i = 0 ; i<arr.length ; i++){
//         if(arr[i] > maxi){
//             maxi = arr[i] ;
//         }
//     }
//     return maxi ;
// }

// console.log(maximum(arr)) ;

//same logic using reduce

const output2 = arr.reduce(function (acc, curr) {
  if (acc < curr) {
    acc = curr;
  }
  return acc;
}, Number.MIN_VALUE);

console.log(output2);

const user = [
  { firstName: "prem", lastName: "Rahi", age: 20 },
  { firstName: "pem", lastName: "Rai", age: 20 },
  { firstName: "ashay", lastName: "Rahi", age: 56 },
  { firstName: "akhay", lastName: "Rahi", age: 56 },
  { firstName: "sahrukh", lastName: "Khan", age: 59 },
  { firstName: "shahrukh", lastName: "Khn", age: 59 },
  { firstName: "shahrukh", lastName: "Khan", age: 59 },
  { firstName: "ranveer", lastName: "singh", age: 36 },
];
// we need to return the frequency of all age groups
//-> {20 : 2 ,56 : 2 , 59:3 , 36:1}

const output3 = user.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(output3);


// we will return the first name of all ages < 55
const output4 = user.reduce(function(acc,curr){
  if(curr.age < 55){
    acc.push(curr.firstName)
  }
  return acc ;
},[]);
console.log(output4);

