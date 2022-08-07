let num = +prompt("Enter number");

function round(num) {
  return Math.floor(num * 100).toFixed(2) / 100;
}

console.log(round(num));