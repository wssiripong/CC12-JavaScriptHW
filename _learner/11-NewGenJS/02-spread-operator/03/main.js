function result(firstName, lastName, ...hobbies) {
  return [firstName, lastName, ...hobbies, hobbies.length]
}
console.log(result("siripong","soonthornpun","basketball","movies","apex"))
