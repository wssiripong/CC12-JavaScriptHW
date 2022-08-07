// const array = [1, 2, 30, 400];
// let result = array.map((item, index, array) => item * 2);
// console.log(result);

// const array = [1, 2, 3, 4];
// let result = array.map((item, index, array) => String(item));
// console.log(result);

// const array = [1, '1', 2, {}];
// let result = array.map((item, index, array) => typeof(item));
// console.log(result);

// const array = ['apple', 'banana', 'orange'];
// let result = array.map((item, index, array) => item.toUpperCase());
// console.log(result);

// const array = [1, 3, 4, 5, 6, 7, 8];
// let result = array.map((item, index, array) => item%2 === 0 ? "even" : "odd");
// console.log(result);

// const array = [1, -3, 2, 8, -4, 5];
// let result = array.map((item, index, array) => Math.abs(item));
// console.log(result);

// const array = [100, 200.25, 300.84, 400.3];
// let result = array.map((item, index, array) => String(item.toFixed(2)));
// console.log(result);

// const array = [0, 5, 10, 7, 6, 5, 0];
// const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];
// let result = array.map((item, index, array) => month[item]);
// console.log(result);

// const array = [1, 16, 81, 256, 625, 1296];
// let result = array.map((item, index, array) => item**(1/4))
// console.log(result);

// const array = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// let result = array.map((item, index, array) => item.name);
// console.log(result);

// const array = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// let result = array.map((item, index, array) => item.age);
// console.log(result);

// const array = [
//   { name: 'apple', surname: 'London' },
//   { name: 'banana', surname: 'Bangkok' },
//   { name: 'watermelon', surname: 'Singapore' }
// ];
// let result = array.map((item, index, array) => item.name + " " + item.surname);
// console.log(result);

// const array = [
//   { name: 'apple', birth: '2000-01-01' },
//   { name: 'banana', birth: '1990-10-01' },
//   { name: 'watermelon', birth: '1985-12-01' }
// ];
// let year = 2021;
// let age;
// let result = array.map((item, index, array) => {
//   age = year - item.birth.slice(0,4)
//   return {...item,age: age};
// });

const array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
let result = array.map((item, index, array) => {


  return `<tr><td>${item.name}</td><td>`
})