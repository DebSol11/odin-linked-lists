class Node {
  constructor(value, nextNode) {
    this.value = null; // Holds the data
    this.nextNode = null; // Points to the next node
  }
}

class LinkedList {
  constructor() {
    this.head = null; // The first node in the list
  }
  // Method to append a new node to the list
  append(value) {
    const newNode = new Node(value);
    // The following line checks if this.head is falsy. This includes checking if (this.head === "false" || this.head === "0" || this.head === "" || this.head === "null" || this.head === "undefined" || this.head === "NaN") or short (!this.head)
    if (!this.head) {
      this.head = newNode; // If the list is empty, set head to new node
      return;
    }
    let current = this.head;
    while (current.newNode) {
      current = current.nextNode; // move to the last node
    }
    current.nextNode = newNode; // Link the last node to the new node
  }

  // Method to print the list
  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.nextNode; // Move to the next node
    }
    console.log(result + "null"); // End of the list
  }
}


