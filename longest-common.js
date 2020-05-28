// "flower","flow","flight"

// take first letter .. check if its eual to the second word first letter if yes ? chack thirs if not go to the next letter


function longestCommonPrefix(strs) {
  if (!strs.length) return '';
  let firstchar = strs[0]  
  for (let i = 0; i < firstchar.length; i++) {
    for (let j =1; j<strs.length; j++) {
      if (firstchar[i] !== strs[j][i]) {
        return firstchar.slice(0, i);
      }
    }
  }
  
  return strs[0];
}

longestCommonPrefix(['ff', 'fr'])