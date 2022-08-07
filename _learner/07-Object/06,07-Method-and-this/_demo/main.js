let user = {
  name: 'John',
  age: 30
};
user.sayHi = function () { // sayHi is a method of the object user
  alert('Hello!');
};
user.sayHi(); // Hello!