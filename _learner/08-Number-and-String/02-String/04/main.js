let input = prompt("Enter word");

function checkWord(input) {
  let input2 = input.toLowerCase();
  if (input2.includes("xxx") || input2.includes("porn") || input2.includes("sex")) {
    return true;
  } else {
    return false;
  }
}

console.log(checkWord(input));