
//linked list is a linier data structure 
// elements linked together with a ponter
//ll has a head and a next(pointer)


class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
   constructor(){
     this.head = null;  // set first node to null
     this.size = 0  // lenght of the node
   }

   //insert the first node
   insertFirst(data) {
     this.head = new Node(data, this.head)
   }
   insertLast (data) {
    let node = new Node(data)
    let current
    //if empty make head
    if(!this.head) {
      this.head = node;
    } else {
      current = this.head //start beginning
      while (current.next) {  
        current = current.next
      }
      current.next = node  //add node to the end

    }
    this.size ++
   }

   insertAtIndex(data, index) {  
    if(index > 0 && index > this.size) {   //if index if out of range
      return
    }
    //if first index 
    if(index === 0) {
      this.head = new Node(data, this.head)
      return
    }
    const node = new Node(data);
    let current, previous
    current = this.head
    let count = 0
    while (count < index) {
      previous = current //node before index
      count ++
      current = current.next //node after index
    }
    node.next = current
    previous.next = node
    this.size ++
   }

   getAtIndex(index) {
    // const node = new Node(data);
    let current = this.head
    let count = 0
    while (current) {
      if(count === index) {
        console.log(current.data)
      }
      count ++
      current = current.next
    }
    return; 
   }

   removeAtIndex(index) {
     let current = this.head;
     let previous;
     let count =0
     if(index > 0 && index > this.size) {
       return;
     }
     if (index === 0) {
       this.head = current.next
     } else {
     while(count < index) {
        previous = current
        current = current.next
        count ++
     }
     previous.next = current.index
    }
    this.size --
   }
 clearList() {
   this.head = null
   this.size = 0
 }
 
   printListData() {
    let current = this.head
    while(current) {
      console.log(current.data)
      current = current.next
    }
   }
}
const ll = new LinkedList()
// ll.insertFirst(100)
// ll.insertFirst(200)
ll.insertLast(300)
// ll.insertLast(400)
// ll.insertLast(600)

ll.insertAtIndex(500, 2)
ll.printListData()
ll.removeAtIndex(2)


