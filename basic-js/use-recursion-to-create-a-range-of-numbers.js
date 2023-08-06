function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum){
    return [];
  }
  else {
    const rangeArray = rangeOfNumbers(startNum + 1, endNum);
    rangeArray.unshift(startNum);
    return rangeArray;
  }
};

console.log(rangeOfNumbers(15, 100));