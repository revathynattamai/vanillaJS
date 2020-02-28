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
// console.log(person1.getFullName());
// console.log(person1);


const getAddInput = document.getElementById('item');
const formAdd = document.getElementById('addForm');
const ul = document.getElementById('items');
const deletButton = document.getElementById('items'); 
const filterInput = document.getElementById('filter'); 

formAdd.addEventListener('submit', addItem);
ul.addEventListener('click', removeItem);
filterInput.addEventListener('keyup', filterItem);

function addItem(e) {
  e.preventDefault();
  let addValue = getAddInput.value;
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(addValue));
  li.className = 'list-group-item';
  //Create delete button
  let deleteBtn = document.createElement('button');
  deleteBtn.appendChild(document.createTextNode('X'));
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  //Add button to li
  li.appendChild(deleteBtn);
  //Add li to ul
  ul.appendChild(li);
}

function removeItem(e) {
  e.preventDefault();
  if(e.target.classList.contains('delete')) {
    let li = e.target.parentElement;
    ul.removeChild(li);
  }
}

function filterItem(e) {
  let value = e.target.value.toLowerCase()
  let items = document.getFullNameet
  Array.from(ul).forEach(function(a){ console.log(a); });
}

