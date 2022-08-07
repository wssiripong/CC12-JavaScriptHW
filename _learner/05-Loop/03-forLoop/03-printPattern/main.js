let print = "";

for (let i=1 ; i <= 4 ; i++) {
  for(let m=1 ; m <=4 ; m++) {
    if (m <= i) {
      print += "*";
    } else {
      print += "";
    }
  }
  print += "\n"
}

console.log(print);