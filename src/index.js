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
    this.head = newNode;
  }

  calculateSize() {
    let currentNode = this.head;
    let sizeCounter = 0;
    while (currentNode) {
      currentNode = currentNode.nextNode;
      sizeCounter++;
      // Move to the next node
    }
    return sizeCounter;
  }

  returnHead() {
    return this.head.value;
  }

  returnTail() {
    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
      // move to the last node
    }
    return currentNode.value;
  }

  getValueAt(index) {
    let current = this.head;
    let count = 1;

    // Traverse the linked list
    while (current !== null) {
      if (count === index) {
        // Return data at the current
        // node if index matches
        return current.value;
      }
      count++;
      current = current.nextNode;
    }
    // Return -1 if index is out of bounds
    return -1;
  }

  pop() {
    if (!this.head) {
      return undefined;
    } else {
      let headNode = this.head;
      this.head = headNode.nextNode;
      return headNode.value;
    }
  }

  // METHODS THAT PRINT
  // The list
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

  // The size of the list
  printSize() {
    const printMessage = "The total number of nodes in the list is: ";
    return console.log(printMessage + newLinkedList.calculateSize());
  }

  // The first node aka. head of the list
  printHead() {
    const printMessage = "The value of the first node in the list is: ";
    return console.log(printMessage + newLinkedList.returnHead());
  }

  printTail() {
    const printMessage = "The value of the final node in the list is: ";
    return console.log(printMessage + newLinkedList.returnTail());
  }

  printValueAt(index) {
    let result = newLinkedList.getValueAt(index);
    if (result !== -1) {
      console.log(`Element at index ${index} has a value of ${result}`);
    } else {
      console.log(`Index ${index} is out of bounds`);
    }
  }

  printPopped() {
    let valuePop = newLinkedList.pop();
    if (!valuePop) {
      console.log("There is no value to pop of the list, the list is likely empty.");
    } else {
      console.log(`The head with value ${valuePop} has been popped of the list`)
    }
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
newLinkedList.printSize();
newLinkedList.printHead();
newLinkedList.printTail();
newLinkedList.printValueAt(2);
// console.log(newLinkedList.pop());
newLinkedList.printPopped();
newLinkedList.printList();
/* 
Node class: Each node holds a value and a reference (next) to the next node.

LinkedList class: Manages the list, starting with an empty list (head is null).

append method: Adds a new node with the given value at the end of the list.
The if condition checks if this.head is falsy. This includes checking if (this.head === "false" || this.head === "0" || this.head === "" || this.head === "null" || this.head === "undefined" || this.head === "NaN") or short (!this.head)

printList method: Prints all node values in the format value->value->...->null.
*/
