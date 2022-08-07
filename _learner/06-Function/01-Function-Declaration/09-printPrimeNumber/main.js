function findPrime(n) {
  let k = 0;
  for (let i=2; i<n; i++) {
    if (n%i===0) {
      k = 1;
      break;
    }
  }
  if (k===0) {
    return true;
  } else {
    return false;
  }
}

function listPrime(n) {
  let print = "";
  for (let m=2; m<=n; m++) {
    if (findPrime(m)===true) {
      print += `${m} `
    }
  }
  return print;
}
