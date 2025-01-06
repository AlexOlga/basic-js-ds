const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    const n = this.stack.length;
    if (n > 0) {
      const item = this.stack[n - 1];
      this.stack.pop();
      return item;
    } else {
      return null;
    }
  }

  peek() {
    const n = this.stack.length;
    return this.stack[n - 1];
  }
}

module.exports = {
  Stack,
};
