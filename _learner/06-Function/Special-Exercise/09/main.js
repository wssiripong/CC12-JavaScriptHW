let num = prompt("Enter number");
let k = 2;
let print = "";

for (let i = 1; i <= num; i++) {
  print += k;
  print += "\n";
  k += 2;
}

console.log(print);