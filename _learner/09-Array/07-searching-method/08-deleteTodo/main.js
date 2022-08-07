const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];

function deleteTask(id) {
  let result = tasks.findIndex((item, index, array) => item.id === id)

  tasks.splice(result, 1);
}

console.log(deleteTask(1));

console.log(tasks);