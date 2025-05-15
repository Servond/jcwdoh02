// STACK

class Stack {
  #maxSize;
  #container = [];

  constructor(maxSize = 5) {
    this.#maxSize = maxSize;
  }

  #isFull() {
    return this.#container.length >= this.#maxSize;
  }

  #isEmpty() {
    return this.#container.length === 0;
  }

  push(element) {
    if (this.#isFull()) return "Full";

    this.#container.push(element);
  }

  pop() {
    if (this.#isEmpty()) return "Empty";

    this.#container.pop();
  }

  getContainer() {
    return this.#container;
  }
}

const newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);
newStack.push(5);
newStack.push(6);

console.log(newStack.getContainer());

newStack.pop();
console.log(newStack.getContainer());
newStack.pop();
console.log(newStack.getContainer());
newStack.pop();
console.log(newStack.getContainer());
newStack.pop();
console.log(newStack.getContainer());
newStack.pop();
console.log(newStack.getContainer());

// QUEUE

class Queue {
  #maxSize;
  #container = [];

  constructor(maxSize = 5) {
    this.#maxSize = maxSize;
  }

  #isFull() {
    return this.#container.length >= this.#maxSize;
  }

  #isEmpty() {
    return this.#container.length === 0;
  }

  push(element) {
    if (this.#isFull()) return "Full";

    this.#container.push(element);
  }

  shift() {
    if (this.#isEmpty()) return "Empty";

    this.#container.shift();
  }

  getContainer() {
    return this.#container;
  }
}

const newQueue = new Queue();

newQueue.push(1);
console.log(newQueue.getContainer());
newQueue.push(2);
console.log(newQueue.getContainer());

newQueue.shift();
console.log(newQueue.getContainer());

// SET

const arr = [1, 2, 3, 4, 5, 5];
arr.push(6);

console.log(arr);

const newSet = new Set(arr);
newSet.add(1);
console.log(newSet);

const arr2 = [...newSet];
console.log(arr2);

const arr3 = Array.from(newSet);
console.log(arr3);

// HASH TABLE / MAP

const obj = {
  name: "David",
  age: 22,
};

const newMap = new Map(Object.entries(obj));
newMap.set("name", "Budi");

for (let [key, value] of newMap) {
  if (key === "TTL") {
  }
  console.log(key);
  console.log(value);
}

const newObj = Object.fromEntries(newMap);
console.log(newObj);

// LINKED LIST

const linkedList = {
  head: {
    value: "A",
    next: {
      value: "B",
      next: {
        value: "C",
        next: null,
      },
    },
  },
};

class Node {
  value;
  next;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head;
  size;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    let node = new Node(value);

    let current;

    if (this.head === null) {
      this.head = node;
    } else {
        current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = node;
    }

    this.size++;
  }
}

const newLinkedList = new LinkedList();
newLinkedList.add("A");
newLinkedList.add("B");
newLinkedList.add("C");
console.log(newLinkedList);
