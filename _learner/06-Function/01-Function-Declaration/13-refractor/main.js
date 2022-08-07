// function checkAge(age) {
//   if (age>18) {
//     return true;
//   }
//   if (age<=18) {
//     return confirm("Did parents allow you")
//   }
// }

// function checkAge(age) {
//   return result = (age>18) ? true : confirm("Did parents allow you");
// }

function checkAge(age) {
  let a = age > 18 || confirm("Did parents allow you");
  return a; 
}