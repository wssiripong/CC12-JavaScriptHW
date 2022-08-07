let sum = 0;
let sum_even = 0;
let sum_evenpower = 0;
let sum_odd = 0;
let sum_divideby3 = 0;

for (let i=1; i<101; i++) {
  sum += i;
  if (i % 2 === 0) {
    sum_even += i;
    sum_evenpower += i**2;
  } 
  if (i % 2 !== 0) {
    sum_odd += i;
  }
  if (i % 3 === 0) {
    sum_divideby3 += i**2;
  }
}

console.log(`Sum of 1-100 = ${sum}`);
console.log(`Sum of even numbers 1-100 = ${sum_even}`);
console.log(`Sum of odd numbers 1-100 = ${sum_odd}`);
console.log(`Sum of even number power of 2 - sum of number divisible by 3 to the power of 2 = ${sum_evenpower - sum_divideby3}`);