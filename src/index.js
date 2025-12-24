import "./styles.css";

class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Method to append a new node to the list
  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      // move to the last node
    }
    currentNode.nextNode = newNode;
    // Link the last node to the new node
  }

  // Method to prepend a new node to the list
  prepend(value) {
    let newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode
  }

  calculateSize() {
    let currentNode = this.head;
    let sizeCounter = 0;
    while (currentNode) {
      currentNode = currentNode.nextNode;
      sizeCounter++;
      // Move to the next node
    }
    return sizeCounter
  }

  returnHead() {
    return this.head.value;
  }

  // Method to print the list
  printList() {
    let currentNode = this.head;
    let result = "";
    while (currentNode) {
      result += currentNode.value + " -> ";
      currentNode = currentNode.nextNode;
      // Move to the next node
    }
    console.log("head = " + result + "null"); 
    // End of the list
  }

  printSize() {
    const printMessage = "The total number of nodes in the list is: ";
    console.log(newLinkedList.calculateSize());
    return console.log(printMessage + newLinkedList.calculateSize());
  }
}

let newLinkedList = new LinkedList();
newLinkedList.append(10);
newLinkedList.printList();
newLinkedList.prepend(5);
newLinkedList.printList();
newLinkedList.append(20);
newLinkedList.printList();
newLinkedList.append(30);
newLinkedList.printList();
console.log(newLinkedList.printSize());

console.log("The value of the first node in the list is: " + newLinkedList.returnHead())





/* 
Node class: Each node holds a value and a reference (next) to the next node.

LinkedList class: Manages the list, starting with an empty list (head is null).

append method: Adds a new node with the given value at the end of the list.
The if condition checks if this.head is falsy. This includes checking if (this.head === "false" || this.head === "0" || this.head === "" || this.head === "null" || this.head === "undefined" || this.head === "NaN") or short (!this.head)

printList method: Prints all node values in the format value->value->...->null.
*/
