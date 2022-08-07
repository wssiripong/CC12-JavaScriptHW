let username = prompt("Enter username");
let password = prompt("Enter password");

if (username === "") {
  alert("username is required");
}  if (password ==="") {
    alert("password is requred")
} else if (password ==="") {
  alert("password is requred");
} else if (username === "admin" && password === "1234" || username === "john" && password === "qwerty") {
  alert("Hello");
} else {
  alert("invalid username or password");
}