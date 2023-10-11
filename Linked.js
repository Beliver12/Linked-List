function Node(data = null, next = null) {
  return { data, next };
}

function LinkedList() {
  let head = Node();
  let tail;
  let size;
  const append = (value) => {
    if (list.head.data && list.tail.data !== null) {
      list.head.next = list.tail;
      list.tail = Node(value);
    } else if (list.head.data !== null) {
      list.tail = Node(value);
      list.head.next = list.tail;
    } else {
      prepend(value);
    }
  };
  const prepend = (value) => {
   list.head = Node(value);
   list.tail = list.head.next;
   list.tail = Node();
   list.head.next = list.tail;
  };
  // head = Node(value);
  // tail = head.next;
  // tail = Node();

  return {
    append, prepend, head, tail,
  };
}

const list = LinkedList('A');

console.log(list);

list.append('A');
console.log(list);
list.append('B');
console.log(list);
list.append('C');
console.log(list);
list.append('D');
console.log(list);

console.log(list.head);
