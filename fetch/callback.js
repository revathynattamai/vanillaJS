const posts = [
    { name: "R", age: 1 },
    { name: "e", age: 1 },
    { name: "v", age: 1 },
    { name: "a", age: 1 },
]

getPosts = () => {
    setTimeout(() => {
        let output = [];
        posts.map(a => output.push(a.name));
        output.map((a) => {
            let p;
            p = document.createElement('p');
            p.appendChild(document.createTextNode(a));
            document.body.appendChild(p);
            // document.body.innerHTML = p;
        })
    }, 1000)
}

createPosts = (a, callback) => {
    setTimeout(() => {
        posts.push(a);
        callback();
    }, 2000)
}

// getPosts();
createPosts({ name: "t", age: 1 }, getPosts);