var mySqrt = function(x) {
    let left = 1;
    let right = x
    let middle;
    if(x < 2) {
      return x
    }

    while(left < right) {
      middle = left+Math.floor((right-left)/2)
      if(middle <= 1 && middle * middle > x) {
        return middle-1
      }
      if(middle * middle === x){
        return middle
      } else if ((middle * middle) > x) {
        right = middle
      }else if ((middle * middle) < x)  {
        left = middle +1
      }
    }
    return left - 1
};

// [12345]67890
mySqrt(2)