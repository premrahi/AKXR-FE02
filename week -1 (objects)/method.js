let user = {
  name: "prem",
  age: 20,
  email: "premrahi234@gmail.com",
  location: "ghaziabad",
  subjects: [
    { title: "maths", score: 80 },
    { title: "physics", score: 83 },
    { title: "chemistry", score: 84 },
    { title: "biology", score: 90 },
  ],
  login() {
    console.log(" user just logged in");
    console.log(user.name);
  },
  logout() {
    console.log("the user has logged out");
  },
  logSubjects: function () {
    console.log("The user has following subjects : ");
    this.subjects.forEach((sub) => {
      console.log(sub.title , sub.score);
    });
  }, // arrow function works differently with *this* keyword

  // we can also use either :{ logSubjects: function(){} } or { logSubjects(){} } both have same functionality
};

// in short *methods*  are functions that are define inside objects.
user.login();
user.logout(), user.logSubjects();
