function checkAge(user) {
  const {firstName, lastName, age} = user;

  if(age > 18) {
    return `Hello, ${firstName} ${lastName}`
  }
}

console.log(checkAge({firstName: "Siripong", lastName: "Soon", age: 26}))
