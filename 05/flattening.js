let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten (arr) {
  return arr.reduce((acc, e) => acc.concat(e));
}

console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]
