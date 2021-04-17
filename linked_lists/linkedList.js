/** Class representing a Linked List */
class LinkedList {
  constructor(value) {
    this.head = {value, next: null};
    this.tail = this.head; // this is pointing directly to this.head, not a copy
  }

  /*
  * Inserts a new value to the end of the linked list
  * @param {*} value - the value to insert
  */
  insert(value) {
    const newNode = {value, next: null}
    this.tail.next = newNode;
    this.tail = newNode;
  }

  /*
  * Deletes a node
  * @param {*} node - the node to remove
  * @return {*} value - the deleted node's value
  */
  remove(node) {
    if (this.length === 0) return undefined;
    let found = false;
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      if (currentNode === node || found) {
        currentNode = currentNode.next;
        found = true;
      }
    }
    currentNode.next = null;
    this.tail = currentNode;
    return node.value;
  }

  /*
  * Removes the value at the end of the linked list
  * @return {*} - the removed value
  */
// {
//   head: {value: 1, next: {value: 2, next: null}}
//   tail: {value: 2, next: null}
// }
  removeTail() {
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next
    }
    this.tail = currentNode;
    this.tail.next = null;
  }

  /*
  * Searches the linked list and returns true if it contains the value passed
  * @param {*} value - the value to search for
  * @return {boolean} - true if value is found, otherwise false
  */
  contains(value) {
    if (this.head.value === value) return this.head;
    if (this.tail.value === value) return this.tail;

    let currentNode = this.head.next;
    while (currentNode.next !== null) {
      if (currentNode.value === value) {
        return currentNode;
      } else {
        currentNode = currentNode.next;
      }
    }
  }  

  /*
  * Checks if a node is the head of the linked list 
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the head, otherwise false
  */
  isHead(node) {
    return node === this.head;
  }

  /*
  * Checks if a node is the tail of the linked list 
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the tail, otherwise false
  */
  isTail(node) {
    return node === this.tail;
  }
}

const myList = new LinkedList(1); //initiate?


// {
//   head: {value: 1, next: null}
//   tail: {value: 1, next: null}
// }

myList.insert(2)

// {
//   head: {value: 1, next: {value: 2, next: null}}
//   tail: {value: 2, next: null}
// }

myList.insert(3)

// {
//   head: {value: 1, next: {value: 2, next: {value: 3, next: null}}}
//   tail: {value: 3, next: null}
// }
console.log('Starting List: ',myList);
console.log('Contains? ', myList.contains(2))
myList.removeTail();
console.log('After removing tail: ', myList);
console.log('Ending List: ', myList);

// {
//   head: {value: 1, next: {value: 2, next: null}}
//   tail: {value: 2, next: null}
// }

// Example of a possible interview question
// Create a function that removes a node
// given a linked list and the previous node
// myList.removeNext(myList, prevNode)
function removeNext(list, prevNode) {

}