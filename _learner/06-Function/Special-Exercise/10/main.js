let num = prompt("Enter number");
let k = 1;
let print = "";

for (let i = 1; i <= num; i++) {
  for (let m = 1; m <= num; m++) {
    print += k;
    k++;
  }
  print += "\n";
}

console.log(print);