const fs = require("fs") ;

//sync...
// fs.writeFileSync('./test.txt','hey there prem 123')

//async
// fs.writeFile('./test.txt' ,'this is async file' ,(err)=>{}) // here a callback function is also included


//reading file
// //sync
const result = fs.readFileSync('./contact.txt' , 'utf-8') ;
console.log(result);
//async
fs.readFile('./contact.txt' ,'utf-8' ,(err , result)=>{
    if(err){
        console.log("ERROR"  , err) ;
    }
    else{
        console.log(result) ;
    }

} ) // it takes an error and result



//append

fs.appendFileSync('./test.txt' , '\nhello 12312') ; // this is used to append data on files

// fs.cpSync('./contact.txt' , '.copy.txt') // this is used ot copy files

// fs.unlinkSync('./test.txt'); // this is used to delete file


console.log(fs.statSync("./test.txt"))