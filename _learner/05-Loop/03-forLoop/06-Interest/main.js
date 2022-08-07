let acc = 100000;

for (let i=1; i<=10; i++) {
  acc += acc*0.025;
}
console.log(acc);