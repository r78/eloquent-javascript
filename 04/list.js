function arrayToList(arr) {
  let lst = {};
  let head = arr.shift();
  if (arr.length > 0) {
    return {value: head, rest: arrayToList(arr)};
  } else {
    return {value: head, rest: null};
  }
}

function listToArray(lst) {
  let arr = [];
  node = lst;
  while (node) {
    arr.push(node.value);
    node = node.rest;
  }
  return arr;
}

function prepend(e, lst) {
  return {value: e, rest: lst}
}

function nth(lst, pos) {
  if (pos == 0) {
    if (lst == null) {
      return undefined;
    } else {
      return lst.value;
    }
  } else {
    return nth(lst.rest, pos - 1);
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nth(arrayToList([10, 20, 30]), 3));
// → undefined
