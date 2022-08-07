let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

let result = arr.reduce((acc, item) => {
  if (acc.max < item) {
  acc.max = item
  }
  if (acc.min > item) {
    acc.min = item
  }
  return acc;
}, {min: arr[0], max: arr[0]});
console.log(result);