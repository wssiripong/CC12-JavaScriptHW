let filterOutOdds = (...num) => num.filter((item) => item%2 === 0)

console.log(filterOutOdds(1,2,3,4,5,6));