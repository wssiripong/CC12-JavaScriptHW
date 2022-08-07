let in1 = +prompt("Enter input 1");
let in2 = +prompt("Enter input 2");
let in3 = +prompt("Enter input 3");

let a;
let b;
let c;

if (in1>=in2 && in1>=in3) {
  a = in1;
  if (in2>=in3) {
    b = in2;
    c = in3;  
  } else {
    b = in3;
    c = in2;
  }
} else if (in2>=in1 && in2>=in3) {
  a = in2;
  if (in1 >= in3) {
    b = in1;
    c = in3;
  } else {
    b = in3;
    c = in1;
  }
} else if (in3>=in1 && in3>=in2) {
  a = in3;
  if (in1 >= in2) {
    b = in1;
    c = in2;
  } else {
    b = in2;
    c = in1;
  }
}

alert(`${a},${b},${c}`);