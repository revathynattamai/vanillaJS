const posts = [
  { name: "R", age: 1 },
  { name: "e", age: 1 },
  { name: "v", age: 1 },
  { name: "a", age: 1 }
];

getPosts = () => {
  document.body.innerHTML = `<h1>Promise</h1>`;
  posts.map(a => {
    let p;
    p = document.createElement("p");
    p.appendChild(document.createTextNode(a.name));
    document.body.appendChild(p);
  });
};

createPosts = a => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(a);
      let error = false;
      if (error) reject("Error");
      else resolve();
    }, 2000);
  });
};

// createPosts({ name: "t", age: 1 })
//   .then(getPosts)
//   .catch(err => {
//     alert(err);
//   });

let p1 = Promise.resolve("Hello");
let p2 = Promise.resolve("Hello");
let p3 = Promise.resolve("Hello");
let p4 = fetch("https://jsonplaceholder.typicode.com/users").then(user =>
  user.json()
);
Promise.all([p1, p2, p3, p4]).then(values => console.log(values));

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  data.map(a => {
    document.getElementById("output").innerHTML += `<li>${a.name}</li>`;
  });
}

fetchUsers();



finder = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  let find = document.getElementById("find").value;
  // data.map(a => { 
  //   if(a.name.toLowerCase().indexOf(find) > -1) {
  //     document.getElementById("output").innerHTML += `<li>${a.name}</li>`;
  //   }
  // });
  let matches = data.filter(a => {
    const regex = new RegExp(`^${find}`, 'gi');
    return a.name.match(regex);
  });
  console.log(matches);
};
document.addEventListener("input", finder);
