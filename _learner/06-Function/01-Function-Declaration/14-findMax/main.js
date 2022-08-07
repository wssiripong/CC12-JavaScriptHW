function max(a = "", b = "", c = "", d = "") {
  if (arguments.length === 0) {
    return undefined;
  }
  return (Math.max(a, b, c, d));
}

console.log(max());
console.log(max(2));
console.log(max(3, 1));
console.log(max(7, 3, 9, 2));