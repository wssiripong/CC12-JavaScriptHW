let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

function getAverageAge(arr) {
  let result = arr.reduce((acc, item, index, array) => acc + item.age, 0)
  return result/arr.length;
}


console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33

