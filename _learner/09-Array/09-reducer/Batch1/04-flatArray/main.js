let flattened = [
  [0, 1],
  [2, 3],
  [4, 5]
];

// let result = flattened.reduce((acc, item) => acc.concat(...item), []);

// console.log(result);

let result = flattened.reduce((acc,item) => {
  acc.push(...item);
  return acc;
}, [])

console.log(result);