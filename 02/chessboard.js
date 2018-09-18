let size = 8;
for (let y = 0; y < size; y++) {
  let line = ' ';
  for (let x = 0; x < size; x ++) {
    if (y % 2 == 0) {
      line += x % 2 == 0 ? ' ' : '#'
    } else {
      line += x % 2 == 0 ? '#' : ' '
    }
  }
  console.log(line);
}
