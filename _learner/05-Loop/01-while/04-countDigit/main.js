let num = +prompt("Enter number");
let count = 0;

while(num>=1) {
  num /= 10;
  count += 1
}

alert(count);