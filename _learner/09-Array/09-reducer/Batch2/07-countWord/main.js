/*
INPUT : Array
OUTPUT : OBJECT
*/
let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];

let result = names.reduce((acc, item) => {
  if (acc[item]===undefined) {
    acc[item] = 1;
  } else {
    acc[item] += 1;
  }
  return acc;
},{})

console.log(result);