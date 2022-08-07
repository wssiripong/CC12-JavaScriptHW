let str = '31 45 12 67 34 86 23 37 19 41';

let arr = str.split(" ");

console.log(arr);

let result = arr.reduce((acc, item) => item < 40 ? acc += +item : acc, 0);
 console.log(result);

