// thought Process
//  if I have 123  
// 123/10  12.3  => take 3
//

 //take number 123
 //reversed =0
 //

// const reversed = (num) => {
// let reversedNum = 0;
// if(num < 0){
//   num *= -1
// }

// while(num > 0) {
//   reversedNum = (reversedNum * 10) + (num%10)
//   num = Math.floor(num/10)
// }
// if(reversedNum > (2**31 -1)) {
//   return 0
// }
// num < 0 ? (reversedNum* -1) : reversed
// }

var isPalindrome = function(num) {
  let reversedNum = 0;
  const neg = num < 0 ? -1 : 1
  let x = Math.abs(num)
  while(x > 0) {
    reversedNum = (reversedNum * 10) + (x % 10)
    x = Math.floor(x/10)
  }
  reversedNum = reversedNum * neg
  console.log(reversedNum)
  if (reversedNum === num && neg === 1) {
    console.log(true)
    return true
  } else {
    console.log(false)
    return false
  }
  };
