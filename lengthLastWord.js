var lengthOfLastWord = function(s) {
  let wordCount = 0
  if(s.length === 0) {
    return wordCount
  } 

  for(let i = s.length-1; i >= 0; i--) {
    if(s.charAt(i) != ' ') {
      console.log(s.charAt(i), 'o')
      wordCount ++
    }else if(s.charAt(i) === ' ' && wordCount >= 1) {
      console.log(i)
      break;
    }
  }
  console.log(wordCount)
};
