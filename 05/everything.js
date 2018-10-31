function every(array, test) {
  for (e of array) {
    if (!test(e)) {
      return false;
    }
  }
  return true
}

function every_v2(array, test) {
  return !array.some(e => !test(e));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log(every_v2([1, 3, 5], n => n < 10));
// → true
console.log(every_v2([2, 4, 16], n => n < 10));
// → false
console.log(every_v2([], n => n < 10));
// → true
console.log(every_v2([12, 14, 16], n => n < 10));
// → false
