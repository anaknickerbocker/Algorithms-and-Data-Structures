/** Class representing a Hash Table */
class HashTable {
  constructor() {
    this._hashTableSize = 10;
    this._storage = Array.apply(null, Array(this._hashTableSize));
    this._length = 0;
  }

  /*
  * Inserts a new key-value pair
  * @param {string} key - the key associated with the value
  * @param {*} value - the value to insert
  */
  insert(key, value) {
    const index = this._hash(key, this._hashTableSize);
    if (!this._storage[index]) this._storage[index] = [];
    this._storage[index].push([key, value])
    this._length++;
  }

  /*
  * Deletes a key-value pair
  * @param {string} key - the key associated with the value
  * @return {*} value - the deleted value
  */
  remove(key) {
    const index = this._hash(key, this._hashTableSize);
    const hashTableSlot = this._storage[index];
    let value;
    if (hashTableSlot.length === 1) {
      value = hashTableSlot;
      hashTableSlot = undefined;
      this._length--;
    } else {
      const indexToRemove = hashTableSlot.findIndex((innerArray) => {
        return innerArray[0] === key;
      });
      value = hashTableSlot[indexToRemove][1];
      // this._storage[index][indexToRemove] = undefined;
      hashTableSlot.splice(indexToRemove, 1)
    }
    
    return value;
  }

  /*
  * Returns the value associated with a key
  * @param {string} key - the key to search for
  * @return {*} - the value associated with the key
  */
  retrieve(key) { // ['a', 1]
    const index = this._hash(key, this._hashTableSize);
    const hashTableSlot = this._storage[index];
    let value;
    if (hashTableSlot.length === 1) {
      value = hashTableSlot[0][1];
    } else {
      const pair = hashTableSlot.find((innerArray) => {
        return innerArray[0] === key;
      });
      value = pair[1];
    }
    return value;
  }

  double() {
    if (this._length > Math.floor(this._hashTableSize / 2)) {
      this._hashTableSize *= 2;
      const newStorage = Array.apply(null, Array(this._hashTableSize));
      this._storage.forEach((slot) => {
        slot.forEach((innerArray) => {
          const newIndex = this._hash(innerArray[0], this._hashTableSize);
          newStorage[newIndex] = [[key, value]]
        })
      })
    }
  }

  /*
  * Hashes string value into an integer that can be mapped to an array index
  * @param {string} str - the string to be hashed
  * @param {number} n - the size of the storage array
  * @return {number} - an integer between 0 and n
  */
  _hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++)
        sum += str.charCodeAt(i) * 3

    return sum % n;
  }
}

const hashTable = new HashTable();
console.log(hashTable._storage);

hashTable.insert('a', 1);
console.log(hashTable._storage);

hashTable.insert('b', 2);
console.log(hashTable._storage);

hashTable.insert('c', 3);
console.log(hashTable._storage);

hashTable.insert('cc', 4);
console.log(hashTable._storage);

console.log('Retrieve: ', hashTable.retrieve('a'));
console.log('Retrieve: ', hashTable.retrieve('b'));
console.log('Retrieve: ', hashTable.retrieve('c'));
console.log('Retrieve: ', hashTable.retrieve('cc'));

hashTable.remove('b');
console.log(hashTable._storage);