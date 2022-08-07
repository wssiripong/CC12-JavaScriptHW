let num = +prompt("Enter number");
let print = "";

for (let i = 1; i <= num; i++) {
  for (let m = 1; m <= num; m++) {
    print += i;
  }
  print += "\n";
}

console.log(print);