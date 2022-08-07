array = [1,2,3,4];

function spreadOp(array1) {
  let array2 = [...array1];
  let result = array2.map((item, index) => {
    if (index === 3) {
      return item**2
    } else {
      return item
    }
  })
  return result;
}



console.log(spreadOp(array));
