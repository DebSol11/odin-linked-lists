
// factory function
function linkedList (name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}
// and that's very similar, except since it's just a function,
// we don't need a new keyword

class Node {
    value = null;
    nextNode = null;

  constructor(value, nextNode) {
    this.value = null;
    this.nextNode = null;
  }

  method() {} // method

  get something() {} // getter method
  set something(oneParameter) {} // setter method

  [Symbol.iterator]() {} // method with computed name (symbol here)
  // ...
}

// Usage:
let user = new User("John");
user.sayHi();