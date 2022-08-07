const arr = ["H", "E", "L", "L", "O", "E", "E"]

// let result = arr.find(function (item, index, array) {
//   console.log(item,index);

//   if(item === "E") {
//     return true;
//   }
// })

let result = arr.find(item => item === "E");

