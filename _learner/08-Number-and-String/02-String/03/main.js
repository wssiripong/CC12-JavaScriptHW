function ucFirst(str) {
  let newString = str.trim()
  let firstLetter = newString[0];
  let restLetters = newString.slice(1);
  return firstLetter.toUpperCase() + restLetters;
}

console.log(ucFirst("hello"))