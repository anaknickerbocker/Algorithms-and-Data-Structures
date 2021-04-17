/** Class representing a Queue. 
 * @constructor
*/
class Queue {
  constructor() {
    this._storage = {};
    this._length = 0;
    this._head = 0;
    this._key = 0;
  }
  /*
  * Enqueues a new value at the end of the queue
  * @param {*} value the value to enqueue
  */
  enqueue(value) {
    if (value !== undefined) {
      this._key++;
      if (this._length === 0) {
        this._head = this._key;
      }

      this._length++;
      this._storage[this._key] = value;
    }
  }

  /*
  * Dequeues the value from the beginning of the queue and returns it
  * @return {*} the first and oldest value in the queue
  */
  dequeue() {
    if (this._length === 0) return undefined;
    const result = this._storage[this._head];
    delete this._storage[this._head];
    this._length--;

    if (this._length > 0) {
      this._head++;
    } else {
      this._head = 0;
    }
     
    return result;
  }
  /*
  * Returns the value at the beginning of the queue without removing it from the queue
  * @return {*} the first and oldest value in the queue
  */
  peek() {
    if (this._length === 0) return undefined;
    return this._storage[this._head];
  }
}

const queue = new Queue();

queue.enqueue(1);
console.log(queue);
queue.enqueue(2);
console.log(queue);
queue.enqueue(3);
console.log(queue);
queue.enqueue(4);
console.log(queue);

console.log(queue.dequeue());
console.log(queue);

console.log(queue.dequeue());
console.log(queue);

queue.enqueue(1);
console.log(queue);
queue.enqueue(2);
console.log(queue);
queue.enqueue(3);
console.log(queue);
queue.enqueue(4);
console.log(queue);

console.log(queue.dequeue());
console.log(queue);

console.log(queue.dequeue());
console.log(queue);

console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.peek())

// {}

// enqueue('one')
// {1: 'one'}

// enqueue('two')
// {1: 'one', 2: 'two'}

// peak()
// 'one'
// {1: 'one', 2: 'two'}

// dequeue()
// 'one'
// {2: 'two'}
