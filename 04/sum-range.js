function range(start, end, step = 1) {
  let r = [];
  if (start < end) {
    for (let i = start; i <= end; i += step) {
      r.push(i);
    }
  } else {
    if (step == 1) step = -1;
    for (let i = start; i >= end; i += step) {
      r.push(i);
    }
  }
  return r;
}

function sum(numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }
  return total;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2));
