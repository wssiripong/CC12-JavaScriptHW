let a = +prompt("Enter first number");
let b = +prompt("Enter second number");

if (isNaN(a) || isNaN(b)) {
  alert("Invalid number");
} else {
  alert(a+b);
}

