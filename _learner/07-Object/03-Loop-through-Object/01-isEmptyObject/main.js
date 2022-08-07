// INPUT : Object
// OUTPUT : true === empty object , false === Object has key.

function isEmptyObject(Obj) {
  
  // for loop is active when there is atleast one key.
  for (let key in Obj) {
    return false;
  }
  // If object has zero key, it will return true.
  return true;
}


const user_1 = {name : "CC12"}
const user_2 = {name : "Codecamp", cohort : 12}
const user_3 = {}

console.log(isEmptyObject(user_1));
console.log(isEmptyObject(user_2));
console.log(isEmptyObject(user_3));