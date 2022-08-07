let multiplier = (...num) => num.reduce((acc, item) => item * acc, 1);

console.log(multiplier(1,2,3,4,5,6))
