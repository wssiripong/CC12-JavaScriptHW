const map = new Map();

map.set('name', 'Thomas');
map.set('age', 31);
map.set('name', 'Dan');

map.delete('age');
map.has('birthDate') //? No
map.size
map.clear()