//we will use stacks 
// t]stacks use first in last out like in plates

// operations in stacks 
// push => add element to the stack
//pop => remove element from stack
//peek get the top element in a stack
//length => get elements in a stack
//search => for an element ina a stack
// isemplty => check is elem is emplty
//print => print elements ins stack

// class Stack {
//   constructor() {
//     this.data = []  // an array to store the data
//     this.top = 0  // get top element
//   }

//    length () {
//      return this.top
//    }

//    push(element) {
//      this.data[this.top] = element
//      this.top = this.top+1
//    }

//    pop() {
//      if( this.isEmpty() === false ) {
//      this.top -= 1
//      return this.data.pop()
//      }
//    }

//    peek() {
//      return this.data[this.top -1 ];
//   }
//   isEmpty() {
//    return this.top === 0;
//  }
// }

// var isValid = function (s) {
//   let tack = new Stack();

//   for(let character of s) {
//     console.log(tack)
//     if (character === '{' || character === '(' || character === '[') {
//       tack.push(character);
//     } else if (!tack.isEmpty() && character === '}' && tack.peek() === '{') {
//       tack.pop()
//     } else if (!tack.isEmpty() && character === ')' && tack.peek() === '(') {
//       tack.pop()
//   } else if (!tack.isEmpty() && character === ']' && tack.peek() === '[') {
//     tack.pop()

//  } else {
//    console.log('here')
//    return false
//  }

//   }
//     return tack.isEmpty();
// }


var isValid = function(s) {
  let stack = []
  let parenthesis = {'(': ')','[':']','{':'}'}
  for (let char of s) {
    if (character === '{' || character === '(' || character === '[') {
        tack.push(character);
        
    
  }
}
}
isValid("()")




// lets implement the stack

