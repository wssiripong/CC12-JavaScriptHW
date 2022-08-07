function CalculatorConstructor() {
  this.a;
  this.b;

  this.read = function () {
    this.a = +prompt("Enter number");
    this.b = +prompt("Enter second number");
  };

  this.sum = function () {return (this.a+ this.b)};
  this.mul = function () {return (this.a*this.b)};
}

let obj = new CalculatorConstructor();
