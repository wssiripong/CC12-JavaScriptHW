const arr = [2, 3, 5, 7, 11];

function squarArr(arr) {
  arr.forEach((item,index,array) => {
    array[index] = item**2
  })

  return arr;
}