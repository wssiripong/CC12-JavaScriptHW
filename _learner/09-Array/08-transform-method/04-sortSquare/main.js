const arr = [-3, 2, 0, -7, 4, 6];

arr.sort((a,b) => a**2 < b**2 ? -1 : 1);

console.log(arr);
