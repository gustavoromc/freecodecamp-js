function sum(arr, n) {
  // Only change code below this line
  console.log("arr : " + arr);
  console.log("n : " + n);
  if (n <= 0) {
    return 0;
  }

  else {
    console.log("returning : " + (sum(arr, n - 1) + arr[n-1]))
    return sum(arr, n - 1) + arr[n-1];
  }
  // Only change code above this line
}

console.log("result : " + sum([1, 2, 3, 4, 5], 5));