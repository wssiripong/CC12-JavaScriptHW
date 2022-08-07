let user = prompt("Enter your name", "Guest");
if (user==="" || user===null || user!== "codecamp") {
  user = "Guest";
} else if (user==="codecamp") {
  pass = prompt("Enter password");
  if (pass==="12345") {
    alert("Welcome " + user);
  } else {
    alert("Wrong password");
  }
}