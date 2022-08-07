const person = {
  firstName : "John",
  lastName : "Doe",
  age : 27,
  isAdmin : true,
  child : null,
  address : {
    road : "Sukhumvit",
    province : "Bangkok"
  },
  // Method === function inside object.
  sayHi : function () {
    alert("Hello");
  }
}

// console.log(person);
// console.log(person.firstName);//John
// console.log(person.lastName);//Doe
// console.log(person.address.road);//Sukumvit
// console.log(person.address.district);//undefined


//UPDATE
// console.log(person);
// person.firstName = "Michael";
// person.age += 1;
// person.address.road = "Asia";// ??
// console.log(person); // firstName changed to Michael

//DELETE
// delete person.age;
// console.log(person);

//ADD 
// person.salary = 5000;
// console.log(person);

// ######## ACCESS BY SQUARE BRACKET []

//GET 
// console.log(person["firstName"]); //John
// console.log(person[firstName]) // Reference Error

//let a = "age";
//console.log(person["age"]) // 27
// console.log(person[a]) // 27

//ADD

// person.graduate school = {

//}

// person["graduate school"] = 'Codecamp'
// console.log(person);

//####### Property Short Hand

let username = "CC12"
let password = "1234"
let role = "ADMIN"

// const user = {
//   username : username,
//   password : password,
//   role : role
// }

// const user = {
//   username,
//   password,
//   role
// }

// console.log(user);

