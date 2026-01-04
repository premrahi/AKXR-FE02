const arr = [5, 1, 3, 2, 6];

//use to filter values

// filters out odd values
const output = arr.filter((x) => x % 2);
console.log(output);

//filter out even values
const put = arr.filter((x) => {
  return x % 2 === 0;
});
console.log(put);

// return values > 4
const op = arr.filter((x) => {
  return x > 4;
});
console.log(op);

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
// we will filterout first name of all user whose age is less than 55

const newOutput = user.filter((x) => {
  if (x.age < 55) return x.firstName;
}); // this will not return first name but instead return the entire object

console.log(newOutput);

//we will use chaining of function
const newOutput2 = user
  .filter((x) => {
    if (x.age < 55) return x.firstName;
  })
  .map((x) => x.firstName);

console.log(newOutput2)
