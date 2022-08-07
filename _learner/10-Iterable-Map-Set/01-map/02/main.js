const arr = [
  ['email', 'codeisfun@example.com'],
  ['isActive', true]
];

let map = new Map();

arr.forEach((item) => {
  map.set(item[0],item[1])
})

console.log(map);

