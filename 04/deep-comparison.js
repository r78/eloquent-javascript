function deepEqual(obj1, obj2) {
  if (obj1 === null || obj2 === null || typeof obj1 != "object" || typeof obj2 != "object") {
    return obj1 === obj2;
  } else {
    obj1keys = Object.keys(obj1);
    obj2keys = Object.keys(obj2);
    if (obj1keys.length != obj2keys.length) { return false; }
    for (k of obj1keys) {
      if (deepEqual(obj1[k], obj2[k]) == false) { return false; }
    }
    return true;
  }
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log("more tests");
console.log(deepEqual(1, 1));
// → true
console.log(deepEqual(null, null));
// → true
console.log(deepEqual(1, null));
// → false
