let set = new Set();
set.add('Thailand')
set.add('Japan')
set.add('Thailand')
set.add('China')
set.add('India')
set.add('Thailand')
set.add('China')
set.add('Singapore')
set.add('Japan')

set.delete('india')
set.size

let array = [...set]

console.log(array);