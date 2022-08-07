doubleAndReturnArgs([1, 2, 3], 4, 4); 
// expexted result: [1, 2, 3, 8, 8]
doubleAndReturnArgs([2], 10, 4); 
// expexted result: [2, 20, 8]

function doubleAndReturnArgs (...arr) {
  let result = arr.reduce((acc, item) => {
    if(Array.isArray(item)) {
      return [...acc,...item]
    } else {
      return [...acc, item*2]
    }
  }, [])
  return result;
}

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));

