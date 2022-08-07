const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// expexted result: [0, 2, 4]

let result = [];

// alphabets.forEach((item, index, array) => {if (item === "a") {
//   result.push(index)} 
// });
// console.log(result);


// FOR IN
// for (let index in alphabets) {
//   if (alphabets[index] === "a") {
//     result.push(index);
//   }
// }
// console.log(result);

//FOR INDEX
let foundIndex = alphabets.indexOf('a');

do {
  if(foundIndex !== -1) {
    result.push(foundIndex);
    foundIndex = alphabets.indexOf('a', foundIndex + 1);
  }
} while (foundIndex !== -1);

console.log(result);



