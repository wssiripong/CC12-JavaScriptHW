function Accumulator(a) {
  this.currentValue = a;
  this.read = function () {
    input = +prompt("Enter value");
    this.currentValue += input;
  }
  this.show = function () {
    alert(this.currentValue)
  }
}

let obj = new Accumulator(2);

console.log(obj);
