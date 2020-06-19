

function arrayProduct(arr1) {
  if (arr1.length == 1) { return arr1[0] }
  return arr1.pop() * arrayProduct(arr1);
}

// console.log(arrayProduct([2, 3, 4]))
console.log(arrayProduct([1, 2, 3, 10]))