function Node(data = null, next = null) {
  return { data, next };
}

function LinkedList(list) {
  let head = Node();
  let tail;
  let size;
  const append = (value) => {
    if (head.data && tail.data !== null) {
      head.next = tail;
      tail = Node(value);
    } else if (head.data !== null) {
      tail = Node(value);
    } else {
      prepend(value);
    }
  };
  const prepend = (value) => {
    head = Node(value);
    tail = head.next;
    tail = Node();
  };
  return { append, prepend, head };
}

const list = LinkedList();

console.log(list.head);

list.append('A');
list.append('B');
list.append('C');

console.log(list.head);
