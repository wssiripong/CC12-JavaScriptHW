function checkPermission(role, yes, no) {
  if (role === "ADMIN") {
    yes();
  } else {
    no();
  }
}

function showOk() {
  alert("ACCESS GRANTED");
}

function showCancel() {
  alert("ACCESS DENIED");
}
