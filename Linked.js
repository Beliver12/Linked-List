function Node(data = null, next = null) {
  return { data, next };
}

const LinkedList = () => {
  const head = Node();
  const tail = Node();
  let size = 0;
  const prepend = (value) => {
    size++;
    list.size = size;
    list.head = Node(value, list.head);
  };

  const append = (value) => {
    if (list.head === null) {
      prepend(value);
    } else {
      size++
      list.size = size;
      let currentNode = list.head;
      while (currentNode.next.data !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = Node(value, null);
      list.tail = currentNode.next
    }
  };
  return {
    head, prepend, append,
  };
}

const list = LinkedList();

console.log(list);

list.prepend('A');
console.log(list.head);
list.prepend('B');
console.log(list.head);
list.prepend('C');
console.log(list);
list.prepend('D');
console.log(list);
list.append('E');


console.log(list.head);
console.log(list.tail);
console.log(list.size);
