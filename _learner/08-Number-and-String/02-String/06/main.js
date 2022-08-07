function extractCurrencyValue(str,rate) {
  let money = Number(str.slice(1));
  return "THB" + money * rate;
}

console.log(extractCurrencyValue("$120", 30))