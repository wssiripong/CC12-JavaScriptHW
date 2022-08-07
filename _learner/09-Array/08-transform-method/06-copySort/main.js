let arr = ['React', 'Vue', 'Angular'];
let sorted = copySorted(arr);

function copySorted(arr) {
  let result = arr.slice(0).sort((a,b) => a < b ? -1 : 1);
  return result;
}

console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)