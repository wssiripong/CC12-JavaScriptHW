const arr = [11, 17, 23, 13, 7, 19];

function compareFn(a,b) {
  return a < b ? 1 : -1;
}

// arr.sort(compareFn);
// console.log(arr)

arr.sort((a,b) => a < b ? 1 : -1);
console.log(arr)
