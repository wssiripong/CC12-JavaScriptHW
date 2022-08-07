const arr = ['Dog', 'Giraffe', 'Bear'];

let set = new Set()

for (let animal of arr) {
  set.add(animal);
}

console.log(set);