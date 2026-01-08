document.getElementById("get-text").addEventListener("click", getText);

document.getElementById("get-users").addEventListener("click", getUser);

document.getElementById("get-Posts").addEventListener("click", getPost);

document.getElementById("addpost").addEventListener("submit", addPost);

function getText() {
  fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("output").innerHTML = data;
    });
}

function getUser() {
  fetch("user.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h3>Users</h3>";
      data.forEach((user) => {
        output += `
        <ul><li>
        id : ${user.id}
        </li>
        <li>
        name : ${user.name}
        </li>
        <li>
        email id : ${user.email}
        </li></ul>
        `;

        document.getElementById("output").innerHTML = output;
      });
    });
}
function getPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h1>POSTS</h1>";
      data.forEach((post) => {
        output += `
        <div>
            <p>${post.id}</p>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `;

        document.getElementById("output").innerHTML = output;
      });
    });
}

function addPost(e) {
  e.preventDefault();

  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      'Accept': "application/json ,text/plain , */*",
      'Content-type': "application/json",
    },
    body: JSON.stringify({ title: title, body: body })
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
  })
}
