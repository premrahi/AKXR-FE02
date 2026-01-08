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

function createData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.push(newData);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("Some Error occured");
      }
    }, 2000);
  });
}

createData({ firstName: "siddharth", lastName: "sameer" }).then(getData);
