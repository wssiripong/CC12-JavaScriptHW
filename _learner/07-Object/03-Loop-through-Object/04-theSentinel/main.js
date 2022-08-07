let obj1 = {};
let THE_SENTINEL = "stop";


function addition(obj) {
  let key = prompt("Enter key");
  while (key !== THE_SENTINEL && key !== null && key.trim !== "") {
    let value = prompt("Enter value");
    if (value === THE_SENTINEL) break;
    obj[key] = value;
    key = prompt("Enter key");
  }
  console.log(obj);
}