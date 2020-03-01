class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}


const n2 = new Node(200);
const n1 = new Node(100, n2);

