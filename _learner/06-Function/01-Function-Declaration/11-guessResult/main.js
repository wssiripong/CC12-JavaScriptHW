function sayHi(age) {
  if (age < 12) alert('Hi kid');
}
console.log(sayHi); // * Show function's code
console.log(sayHi(10)); // ** nothing, the input value is below 12

function sayHi(name) {
  if (name) {
    alert('Hi ' + name);
    return;
  } else {
    return 'Who are you';
  }
}
console.log(sayHi('John')); // *** Hi John
console.log(sayHi()); // **** Who are you