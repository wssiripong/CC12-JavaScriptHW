function removeRandom(arr) {
  arr.splice(Math.floor(Math.random() * arr.length), 1);
  return arr;
}

console.log(removeRandom([1,2,3,4,5]));

