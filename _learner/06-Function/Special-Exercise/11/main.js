let num = prompt("Enter number");
let print = "";

for (let i = 1; i <= num; i++) {
  for (let m = 1; m <= num; m++) {
    if (i===m) {
      print += "_";
    } else {
      print += "*";
    }
  }
  print += "\n";
}

console.log(print);