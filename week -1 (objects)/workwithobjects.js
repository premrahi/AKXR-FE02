const myObjects = {
    a:'prem' ,
    b:20 ,
    c:true 
}

//for printing object properties (object keys)
Object.keys(myObjects).forEach(x=>{
    console.log(x)
});

//for printing values 
Object.keys(myObjects).forEach(x=>{
    console.log(myObjects[x])
})

//efficient way to get values (object values)
let values = Object.values(myObjects)
console.log(values)

//(object entries) it convert each property of an object into an array
let entries = Object.entries(myObjects)
console.log(entries)