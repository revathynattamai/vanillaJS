const todos = [
    { value: "New", "onclick": "CreateNewDoc()" },
    { value: "Open", "onclick": "CreateNewDoc()" },
    { value: "Close", "onclick": "CloseDoc()" }
]

let a = todos.filter(todo => todo.onclick === "CreateNewDoc()").map(todo => todo.value)

console.log(a);