// import { link } from "fs";

//  1 -> 2 -> 3 -> 4
//  8 -> 9 -> 20
// var mergeTwoLists = function(l1, l2) {
//   const dummy = new ListNodes(-1)
//   let head = dummy;
//   while (l1 !==null && l2!==null) {
//     if(l1.val <= l2.val){
//       dummy.next = l1
//       l1 = l1.next
//     } else {
//       dummy.next = l2
//       l2 = l2.next
//     }
//     dummy = dummy.next
//   }
  
//   if(l1 !== null) {
//     dummy.next = l1
//   } else{
//     dummy.next = l2
//   }
//   return head.next
//   };
  
//   class ListNodes {
//     constructor(val = null, next = null) {
//       this.val = val;
//       this.next = next;
//     }
//   }

var mergeTwoLists = function(l1, l2) {
let head = {val:-1, next:null}
let p = head
  //next is the pointer
  // val is the current position

  while(l1 !==null && l2 !== null) {
    if(l1.val < l2.val) {
      p.next = l1
      li = l1.next
    } else {
      p.next= l2
      l2 = l2.next
    }
    p = p.next
  }  

return head.next
}

