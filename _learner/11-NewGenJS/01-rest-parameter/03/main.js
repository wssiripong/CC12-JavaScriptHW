let arr = {}

let mergeObjects = (...obj) => {
  let result = obj.reduce((acc, item) => Object.assign(item, acc), {});
  return result
}

console.log(mergeObjects({a:2 , b: 3}, {b:4 , c: 5}, {c:2 , d: 3}))

