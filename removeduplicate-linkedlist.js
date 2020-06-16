class Node {
  constructor(data, next = null) {
  this.data = data
  this.next = next

  }
}

var deleteDuplicates = function(head) {
  let current = new Node(head);
  while (current != null && current.next != null) {
    if(current.next.data == current.data) {
      current.next = current.next.next
    } else {
      current = current.next
    }
  }
};



