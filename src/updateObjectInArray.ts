function updateObjectInArray<T>(initialArray: T[], key: keyof T, value: unknown, patch: Partial<T>) {
  const clonedArray = structuredClone(initialArray);
  const indexToPatch = clonedArray.findIndex((object) => object[key] === value);

  if (indexToPatch !== -1) {
    clonedArray[indexToPatch] = { ...clonedArray[indexToPatch], ...patch }
  }

  return clonedArray;
}

const initialArray = [{
  userId: 10,
  id: 99,
  title: 'temporibus sit alias delectus eligendi possimus magni',
  body: 'quo deleniti praesentium dicta non quod aut est molestias molestias et officia quis nihil',
},
{
  userId: 10,
  id: 100,
  title: 'qui est esse',
  body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
}
];

console.log(updateObjectInArray(initialArray, 'id', 99, { body: 'dgdfg' }))
console.log(initialArray)
