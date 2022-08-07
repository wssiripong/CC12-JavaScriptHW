let print = "";

for (let i=1; i<=8; i++) {
  for (let m=1; m<=8; m++) {
    if (m<=i) {
      print += m;
    }
  }
  print += "\n";
}
console.log(print);