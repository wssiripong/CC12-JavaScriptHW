let n = {};

function product(obj) {
  let name = prompt("Product's name");
  let amount = +prompt("Product's amount");
  let price = +prompt("Product's price");
  let discount = +prompt("Product's discount in percentage");
  let totalPrice = 0;

  obj.name = name;
  obj.amount = amount;
  obj.price = price;
  obj.priceAfterDiscount = function () {
    totalPrice = (price - price*(discount/100))*amount;
    return totalPrice;
  }
  if (discount !== 0 && discount !== "") {
    let discountpercent = discount;
    discountpercent += "%";
    obj.discount = discountpercent;
  }
}

console.log(product(n))