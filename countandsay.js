
// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
var countAndSay = function(n) {  
  let result = "1"
  while (n > 1) {
    let count = 1;
    let next = ""
    let current = 0
    for(let i=1; i <= result.length; i++ ) {
      if(!result[i]) {
        next += `${count}${result[current]}`
        break;
      }
      if(result[i] !== result[current]) {
        next += `${count}${result[current]}`
        current = i;
        count = 1
      } else {
        count ++
      }
    }
    result = next
    n--
  }
return result
};
