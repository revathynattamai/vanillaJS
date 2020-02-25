const todos = [
    { value: "New", "onclick": "CreateNewDoc()" },
    { value: "Open", "onclick": "CreateNewDoc()" },
    { value: "Close", "onclick": "CloseDoc()" }
]
let a = todos.filter(todo => todo.onclick === "CreateNewDoc()").map(todo => todo.value)
console.log(a);

function Person(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
} 
// ES6 does not work in prototype
// Person.prototype.getFullName = () => { 
//     return `${this.a} ${this.b} ${this.c}`;
// }
Person.prototype.getFullName = function () { 
    return `${this.a}${this.b} ${this.c}`;
}


const person1 = new Person("Reva", "thy", "Karthik");
console.log(person1.getFullName());
