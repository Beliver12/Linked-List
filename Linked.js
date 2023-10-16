function Node(data = null, next = null) {
  return { data, next };
}

const LinkedList = () => {
  let head = Node();
  let tail;
  let size = 0;
  const findTail = () => {
    let lastNode = head;

    while (lastNode.next.data !== null) {
      lastNode = lastNode.next;
    }
    tail = lastNode;
  };

  const prepend = (value) => {
    size++;
    head = Node(value, head);
    findTail();
  };

  const append = (value) => {
    if (head === null) {
      prepend(value);
    } else {
      let currentNode = head;
      while (currentNode.data !== tail.data) {
        currentNode = currentNode.next;
      }
      size++;
      currentNode.next = Node(value, null);
      currentNode.next.next = Node();
      findTail();
    }
  };

  const at = (index) => {
    if (index > size) {
      alert('No such index');
      return false;
    }
    size = 0;
    let currentNode = head;
    while (size !== index) {
      currentNode = currentNode.next;
      size++;
    }
    console.log(currentNode);
    return currentNode;
  };

  const find = (value) => {
    let currentNode = head;
    size = 0;
    while (!Object.values(currentNode).includes(value)) {
      currentNode = currentNode.next;
      size++;
      if (currentNode === null) {
        return null;
      }
    }
    return size;
  };

  const contain = (value) => {
    let currentNode = head;
    while (!Object.values(currentNode).includes(value)) {
      currentNode = currentNode.next;
      if (currentNode === null) {
        return false;
      }
    }
    return true;
  };

  const pop = () => {
    if (head === null) {
      alert('Cannot delete');
    }
    let nodeToDelete = head;
    while (nodeToDelete.next.data !== tail.data) {
      nodeToDelete = nodeToDelete.next;
    }
    size--;
    nodeToDelete.next = Node();
    findTail();
  };

  const toString = () => {
    let node = head;
    let Node = '';
    Node += `(${node.data}) ->`;
    while (node.next.next !== null) {
      node = node.next;
      Node += `(${node.data}) ->`;
    }
    Node += node.next.data;
    console.log(Node);
  };
  const removeAt = (index) => {
    let nodeToDelete = head;
    let i = 0;
    while (i !== index) {
      nodeToDelete = nodeToDelete.next;
      i++;
    }
    size--;
    nodeToDelete.data = nodeToDelete.next.data;
    findTail();
    while (nodeToDelete.next.data !== tail.data) {
      nodeToDelete = nodeToDelete.next;
      nodeToDelete.data = nodeToDelete.next.data;
    }
    nodeToDelete.next = Node();
    findTail();
  };

  const insertAt = (value, index) => {
    let currentNode = head;
    let i = 0;
    while (i !== index) {
      currentNode = currentNode.next;
      i++;
    }
    currentNode.next = Node(value, currentNode.next);
  };

  return {
    prepend,
    append,
    findTail,
    pop,
    at,
    find,
    contain,
    toString,
    removeAt,
    insertAt,
    get head() {
      return head;
    },
    get tail() {
      return tail;
    },
    get size() {
      return size;
    },
  };
};

const list = LinkedList();

list.prepend('A');
console.log(list.head);
list.prepend('B');
console.log(list.head);
list.prepend('C');
console.log(list);
list.prepend('D');
list.prepend('S');
list.prepend('H');
list.removeAt(2);
list.toString();
list.insertAt('E', 2);
console.log(list.head);
