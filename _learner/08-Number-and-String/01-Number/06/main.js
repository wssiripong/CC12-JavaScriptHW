function makeRandomNumberInRange (min, max) {
  let diff = Math.random() *(max - min);
  return (min + diff).toFixed(2);
}

console.log(makeRandomNumberInRange(2,9))