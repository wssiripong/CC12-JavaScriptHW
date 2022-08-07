let phrase = 'Hello';
if (true) {
  let user = 'John';
  function sayHi() {
    var c = 12;
    alert(`${phrase}, ${user}`);
  }
}
sayHi(); // * Hello, John (These is no variable phrase declared inside the function so it takes phrase variable from outside the function.)

