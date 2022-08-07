let obj1 = {};

function fruit(obj) {
  let name = prompt("Enter fruit's name");
  while (name !== "stop" && name !== null && name.trim !== "") {
    let amount = +prompt("Enter amount");
    if (amount > 1) {
      if (name.endsWith("o")) {
        name += "es";
      } else {
        name += "s";
      }
    }
    obj[name] = amount;
    name = prompt("Enter fruit's name");
  }
}

fruit(obj1);