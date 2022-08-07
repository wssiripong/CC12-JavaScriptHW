let x = 1;
function func() {
  console.log(x); // * Error, because it tries to use x value inside the function but it is declared after console.log)
  let x = 2;
}
func();