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

  contains(value) {
    let currentNode = this.head;
    while (currentNode.nextNode || currentNode.nextNode === null) {
      if (currentNode.value === value) {
        return true;
      } else if (currentNode.nextNode === null) {
        return false;
      }
      currentNode = currentNode.nextNode;
    }
  }

  getIndexAt(value) {
    let currentNode = this.head;
    let count = 1;
    while (currentNode.nextNode || currentNode.nextNode === null) {
      if (currentNode.value === value) {
        return count;
      } else if (currentNode.nextNode === null) {
        return -1;
      }
      count++;
      currentNode = currentNode.nextNode;
    }
  }

  // using the rest parameter syntax "...values"
  insertAt(index, linkedListObject, ...values) {
    linkedListObject.checkIfIndexOutOfBounds(index, linkedListObject);

    for (let value of values) {
      const newNode = new Node(value);
      if (index === 1) {
        newNode.nextNode = this.head;
        this.head = newNode;
      } else {
        let currentNode = this.head;
        for (let i = 0; i < index - 2; i++) {
          if (currentNode === null) {
            throw new Error("Index out of bounds");
          }
          currentNode = currentNode.nextNode;
        }
        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
      }
      index++;
    }
  }

  removeAt(index, linkedListObject) {
    linkedListObject.checkIfIndexOutOfBounds(index, linkedListObject);

    let current = this.head;
    let previous;

    // remove head
    if (index === 1) {
      this.head = current.nextNode;
    } else {
      // step over the node at the specific index
      let count = 1;
      while (count < index) {
        previous = current; // Node before the target
        current = current.nextNode; // Target node to be removed
        count++;
      }
      previous.nextNode = current.nextNode;
    }
  }

  checkIfIndexOutOfBounds(index, linkedListObject) {
    if (index <= 0 || index > linkedListObject.calculateSize() + 1) {
      throw new Error("Index out of bounds");
    }
  }

  // METHODS THAT PRINT
  // The list
  printList() {
    let currentNode = this.head;
    let result = "";
    while (currentNode) {
      result += "( " + currentNode.value + " )" + " -> ";
      currentNode = currentNode.nextNode;
      // Move to the next node
    }
    console.log("head = " + result + "null");
    // End of the list
  }

  // The size of the list
  printSize(linkedListObject) {
    const printMessage = "The total number of nodes in the list is: ";
    return console.log(printMessage + linkedListObject.calculateSize());
  }

  // The first node aka. head of the list
  printHead(linkedListObject) {
    const printMessage = "The value of the first node in the list is: ";
    return console.log(printMessage + linkedListObject.returnHead());
  }

  printTail(linkedListObject) {
    const printMessage = "The value of the final node in the list is: ";
    return console.log(printMessage + linkedListObject.returnTail());
  }

  printValueAt(index, linkedListObject) {
    let result = linkedListObject.getValueAt(index);
    if (result !== -1) {
      console.log(`Element at index ${index} has a value of ${result}`);
    } else {
      console.log(`Index ${index} is out of bounds`);
    }
  }

  printPopped(linkedListObject) {
    let valuePop = linkedListObject.pop();
    if (!valuePop) {
      console.log(
        "There is no value to pop of the list, the list is likely empty."
      );
    } else {
      console.log(
        `The head with value ${valuePop} has been popped of the list`
      );
    }
  }

  printContains(value, linkedListObject) {
    if (linkedListObject.contains(value) === true) {
      console.log(`Value ${value} is in the list`);
    } else {
      console.log(`Value ${value} is NOT in the list`);
    }
  }

  printIndexAt(value, linkedListObject) {
    let index = linkedListObject.getIndexAt(value);
    if (index !== -1) {
      console.log(
        `The first element with the value ${value} has an index of ${index}`
      );
    } else {
      console.log(`The element with the ${value} was not found in the list`);
    }
  }
}

const list = new LinkedList();
list.append(10);
list.printList();
list.prepend(5);
list.printList();
list.append(20);
list.printList();
list.append(30);
list.printList();
list.printSize(list);
list.printHead(list);
list.printTail(list);
list.printValueAt(1, list);
list.printPopped(list);
list.printList();
list.printContains(5, list);
list.printIndexAt(30, list);
list.insertAt(2, list, 11, 33);
list.printList();
list.removeAt(2, list);
list.printList();

const animalList = new LinkedList();
animalList.append("dog");
animalList.append("cat");
animalList.append("parrot");
animalList.append("hamster");
animalList.append("snake");
animalList.append("turtle");
animalList.printList();

/* 
Node class: Each node holds a value and a reference (next) to the next node.

LinkedList class: Manages the list, starting with an empty list (head is null).

append method: Adds a new node with the given value at the end of the list.
The if condition checks if this.head is falsy. This includes checking if (this.head === "false" || this.head === "0" || this.head === "" || this.head === "null" || this.head === "undefined" || this.head === "NaN") or short (!this.head)

printList method: Prints all node values in the format value->value->...->null.
*/
