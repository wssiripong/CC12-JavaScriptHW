let arr = [1,2,3,4,5,6,7,8,9];
let array = [];

function filterRange(arr, a, b) {
  array = arr.filter((item, index, array) => item >= a && item <= b);
}

console.log(filterRange(arr, 5, 8));

console.log(array);