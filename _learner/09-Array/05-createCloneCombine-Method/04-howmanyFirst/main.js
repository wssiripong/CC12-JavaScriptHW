function first(arr, n) {
  if (n === undefined || n === 1) {
    return arr.slice(0,1);
  } else {
    return arr.slice(0, n);
  }
}

arr = [7, 9, 0, -2];

console.log(first(arr, 1));

console.log(first(arr, 3));