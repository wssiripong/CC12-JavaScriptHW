let input = +prompt("Enter number");
let arr = [];
let sum = 0;


while (isNaN(input) === false && input !== undefined) {
  arr.push(input)
  input = +prompt("Enter number");
}

arr.forEach((item,index,array) => {
  sum += item;
})

console.log(sum);
