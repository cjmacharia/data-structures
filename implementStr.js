// var strStr = function(haystack, needle) {
//   if(needle.length <1) return 0
//     if(haystack.includes(needle)) {
//       return haystack.indexOf(needle)
//     } else {
//       return -1
//     }
// };


//second solution

// we will use KMP algo 
// string qqwwwqqqww

// qww
var strStr = function(haystack, needle) {
  let m = haystack.length
  let n = needle.length
  let lps= kmp(needle)
   let i = 0  // index of the haystack
   let j = 0// index of the needle
   if(!needle) return 0
   while(i < m) {
     if (haystack[i] === needle[j]) {
       i++
       j++
     }
     if(j === n) {
       return (i-j)
     } else if (haystack[i] != needle[j]) {
        if(j) {
          j = lps[j - 1];
        }  else {
          i++
        }
     }

     }
   return -1
};


const kmp = (pattern) => {
const n = pattern.length  
let len = 0    // length of the previous longest prefix suffix 
let i = 1
let lps = [0] // array with initial values of index
while (i < n) {   
  if(pattern[i] ===pattern[len]) {   // checking if the sufix and prefix are similar
    len += 1 
    lps[i] = len
    i += 1
  } else if(len) {   // if sufix and prefix are not similar and we had increased the index we want to check the previous item in the index 
    len = lps[len-1] 
  } else {   // else we just increment the value of i
    lps[i] = 0
    i++
  }
}
return lps // return the new array with index of 
}

            //  01234567
// pattern = abcdabce
//            abdce
// hay = aaabcdabcdabcdabce
