/** Class representing a Stack. */

class Stack {

  constructor() {
    this._storage = {};
    this._tail = 0;
  }
  /*
  * Adds a new value at the end of the stack
  * @param {*} value the value to push
  */
  push(value) {
    // TODO: add typechecking and check that there is an argument
    if (this._tail === null) {
      this._tail = 1;
    } else {
      this._tail ++;
    }

    this._storage[this._tail] = value;
  }

  /*
  * Removes the value at the end of the stack and returns it
  * @return {*} the last and newest value in the stack
  */
  pop() {
    if (this._tail === null || this._tail === 0) return undefined;
    const popped = this._storage[this._tail];
    delete this._storage[this._tail];
    this._tail --;
    return popped;
  }
  /*
  * Returns the value at the end of the stack without removing it
  * @return {*} the last and newest value in the stack
  */
  peek() {
    if (this._tail === null) return undefined;
    return this._storage[this._tail]
  }
}

const myStack = new Stack();

console.log('peek: ', myStack.peek());

myStack.push(1);
myStack.push(2);
console.log('peek: ', myStack.peek());
myStack.push(3);
myStack.push(4);
console.log(myStack)
console.log('peek: ', myStack.peek());

console.log('pop', myStack.pop());
console.log(myStack)
console.log('pop', myStack.pop());
console.log(myStack)
console.log('pop', myStack.pop());
console.log(myStack)
console.log('pop', myStack.pop());
console.log(myStack)
console.log('pop', myStack.pop());
console.log(myStack)