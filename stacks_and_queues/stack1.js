/** Class representing a Stack. */
class Stack {
  constructor() {
    this._storage = {};
  }

  /*
  * Adds a new value at the end of the stack
  * @param {*} value the value to push
  */
  push(value) {
    if (!this._storage.tail) {
      this._storage.tail = {value, previous: null};
    } else {
      const previous = this._storage.tail;
      this._storage.tail = {value, previous};
    }
  }

  /*
  * Removes the value at the end of the stack and returns it
  * @return {*} the last and newest value in the stack
  */
  pop() {
    if (!this._storage.tail) return undefined;
    const poppedNode = this._storage.tail;
    const previous = poppedNode.previous;
    this._storage.tail = previous;
    return poppedNode;
  }
  
  /*
  * Returns the value at the end of the stack without removing it
  * @return {*} the last and newest value in the stack
  */
  peek() {
    if (!this._storage.tail) return undefined;
    return this._storage.tail;
  }
}

const myStack = new Stack();

console.log('peek: ', myStack.peek());

myStack.push(1);
console.log('peek: ', myStack.peek());
myStack.push(2);
console.log('peek: ', myStack.peek());
myStack.push(3);
console.log('peek: ', myStack.peek());
myStack.push(4);
console.log('peek: ', myStack.peek());
console.log(myStack)

console.log('pop', myStack.pop());
console.log('peek: ', myStack.peek());
console.log('pop', myStack.pop());
console.log('peek: ', myStack.peek());
console.log('pop', myStack.pop());
console.log('peek: ', myStack.peek());
console.log('pop', myStack.pop());
console.log('peek: ', myStack.peek());
console.log('pop', myStack.pop());
console.log('peek: ', myStack.peek());

console.log(myStack)