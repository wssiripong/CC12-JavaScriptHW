let num = +prompt("Input a number");

if (+num<1 || +num>99) {
  alert("Invalid range");
} else {
  let guess;
  do {
    guess = +prompt("Guess a number");
    if (guess > num) {
      alert("Too high");
    } else if (guess < num) {
      alert("Too low");
    } else {
      alert("Correct");
    }
  } while ( num !== guess );
}
