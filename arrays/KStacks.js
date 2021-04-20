/* Create a data structure KStacks that represents a set of k stacks. It should only use one array. The following methods must be supported by KStacks.

push(val, stackNumber) –> pushes x to stack number ‘sn’ where sn is from 0 to k-1
pop(stackNumber) –> pops an element from stack number ‘sn’ where sn is from 0 to k-1
*/

class KStacks {
  constructor(num) {
    this._numberOfStacks = num >= 1 ? num : 1;
    this._storage = [];
    this._stackIndices = {};
  }

  push(val, stackNumber) {
    if (stackNumber <= this._numberOfStacks && stackNumber >= 1) {
      let indexToInsert;
      if (!this._stackIndices.hasOwnProperty(stackNumber)) {
        indexToInsert = stackNumber - 1;
      } else {
        indexToInsert = this._stackIndices[stackNumber] + this._numberOfStacks;
        console.log('index to insert ', indexToInsert);
      }
      this._storage[indexToInsert] = `${indexToInsert} ${val}`;
      this._stackIndices[stackNumber] = indexToInsert;
    } else {
      return undefined;
    }
  }

  pop(stackNumber) {
    if (stackNumber <= this._numberOfStacks && stackNumber >= 1) {
      if (!this._stackIndices.hasOwnProperty(stackNumber)) return undefined;
      const indexToPop = this._stackIndices[stackNumber];
      if (indexToPop < 0) return undefined;
      const poppedValue = this._storage[indexToPop];
      this._storage[indexToPop] = undefined;
      this._stackIndices[stackNumber] -= this._numberOfStacks;
    } else {
      return undefined;
    }
  }
}

// # of stacks = 2
// []
// push('one', 1)
// ['one']
// push('two', 2)
// ['one', 'two']
// push('TWO', 2)
// ['one', 'two', undefined, 'TWO']

// indices for stack 1: 0, 2, 4, 6, ...
// indices for stack 2: 1, 3, 5, 7, ...

// [1,2,1,2]
// length = 4
// last index = 3
// 4 mod 2 = 0
// pop(1) -> want index 2

// [1,2,1]
// length = 3
// last index = 2
// 3 mod 2 = 1
// pop(2) -> want index 1

// const twoStacks = new KStacks(2);

// twoStacks.push("Stack 2: value 1", 2);
// twoStacks.push("Stack 2: value 2", 2);
// // twoStacks.push("Stack 2: value 3", 2);
// // twoStacks.push("Stack 2: value 4", 2);
// console.log(twoStacks);

// twoStacks.push("Stack 1: value 1", 1);
// twoStacks.push("Stack 1: value 2", 1);
// twoStacks.push("Stack 1: value 3", 1);
// twoStacks.push("Stack 1: value 4", 1);
// twoStacks.push("Stack 1: value 5", 1);
// twoStacks.push("Stack 1: value 6", 1);
// console.log(twoStacks);

// twoStacks.pop(1);
// console.log(twoStacks);
// twoStacks.pop(1);
// console.log(twoStacks);
// twoStacks.pop(1);
// console.log(twoStacks);
// twoStacks.pop(2);
// console.log(twoStacks);

const threeStacks = new KStacks(3);

threeStacks.push('Stack 1: value 1', 1);
threeStacks.push('Stack 1: value 2', 1);
threeStacks.push('Stack 1: value 3', 1);
threeStacks.push('Stack 1: value 4', 1);
threeStacks.push('Stack 1: value 5', 1);
threeStacks.push('Stack 1: value 6', 1);
threeStacks.push('Stack 2: value 1', 2);
threeStacks.push('Stack 2: value 2', 2);
threeStacks.push('Stack 2: value 3', 2);
threeStacks.push('Stack 2: value 4', 2);
threeStacks.push('Stack 2: value 5', 2);
threeStacks.push('Stack 2: value 6', 2);
threeStacks.push('Stack 3: value 1', 3);
threeStacks.push('Stack 3: value 2', 3);
threeStacks.push('Stack 3: value 3', 3);
threeStacks.push('Stack 3: value 4', 3);
threeStacks.push('Stack 3: value 5', 3);
threeStacks.push('Stack 3: value 6', 3);

console.log(threeStacks);

threeStacks.pop(1);
threeStacks.pop(1);
threeStacks.pop(3);

console.log(threeStacks);
