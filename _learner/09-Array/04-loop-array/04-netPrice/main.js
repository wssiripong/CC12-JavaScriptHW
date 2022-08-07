const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 }
];

const summary = [];


sales.forEach((item,index,array) => {
  if(item.discount === undefined) {
    item.discount = 1;
    summary.push({netPrice: item.price * item.discount})
  } else {
    summary.push({netPrice: item.price - (item.price * item.discount)})
  }
})

console.log(summary);