let factorial = (num) => {
  let count = 1;
  for (let i = num; i >= 1; i--) {
    count *= i;
  }
  return count;
}