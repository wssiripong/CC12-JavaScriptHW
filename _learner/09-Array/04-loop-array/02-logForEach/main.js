const names = ['Mike', 'Sid', 'Jack', 'Bill'];
let i = 1;
names.forEach((item,index,array) => {
  console.log(`${i}. ${item}`);
  i++
})