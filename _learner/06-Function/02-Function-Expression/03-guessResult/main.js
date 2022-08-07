function magic() {
  return function (x) {
    return x * 42;
  };
}
const answer = magic();
console.log(answer); // * return fuction (x) {return x * 42}
console.log(answer(1337)); // ** 1337*42
console.log(magic(1337)(42)); // *** 1337 doesn't do anything because function magic() doesnt require any parameter, but the function inside magic() does which is 42. So 42*42