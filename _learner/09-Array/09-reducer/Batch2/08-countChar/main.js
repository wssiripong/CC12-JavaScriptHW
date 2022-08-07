let str = 'I live in Thailand';

let lowercase = str.toLowerCase();
const arrChar = lowercase.split("");

let result = arrChar.reduce((acc, item) => {
  if (item !== " ") {
    if (acc[item] === undefined) {
      acc[item] = 1;
    } else {
      acc[item] += 1;
    }
  }
  return acc;
}, {})

console.log(result)