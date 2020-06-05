var addBinary = function(a, b) {
  let result=''
  let i = a.length-1
  let j = b.length-1
  let carry = 0
  while(i >=0 || j >=0) {
    let num  = ((+ a.charAt(i) + +b.charAt(j) + carry))
    let sum = num%2 
    carry = Math.floor(num/2)
    i--
    j--
    result = `${sum}${result}`
  }
  if(carry) {
    return `${carry}${result}`
  }
  return result
};
