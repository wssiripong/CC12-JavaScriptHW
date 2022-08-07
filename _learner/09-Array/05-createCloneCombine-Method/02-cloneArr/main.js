let arr = ["hi","blue","red"];
let Array = []

function clone(arr) {
  Array = arr.slice();
}


console.log(clone(arr));

console.log(Array);