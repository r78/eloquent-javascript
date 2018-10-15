function reverseArray(arr) {
  let rev = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    rev.push(arr[i]);
  }
  return rev;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length/2; i++) {
    let front = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = front;
  }
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
let arrayValue2 = [1, 2, 3, 4];
reverseArrayInPlace(arrayValue2);
console.log(arrayValue2);
