function countBs(s) {
  return countChar(s, 'B');
}

function countChar(s, c) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == c) {
      total += 1;
    }
  }
  return total;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
