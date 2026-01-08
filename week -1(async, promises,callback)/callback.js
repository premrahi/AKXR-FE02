const data = [
  { firstName: "prem", lastName: "Rahi" },
  { firstName: "Priyanshu", lastName: "Gautam" },
  { firstName: "harsh", lastName: "Singh" },
];

function getData() {
  setTimeout(() => {
    let output = "";
    data.forEach((data) => {
      output += `<li>${data.firstName}</li>`;
      document.body.innerHTML = output;
    });
  }, 1000);
}

function createData(newData, callback){
    setTimeout(()=>{
        data.push(newData) ;
        callback() ;
    },2000)
}

createData({firstName:"siddharth" ,lastName:"sameer"},getData);
