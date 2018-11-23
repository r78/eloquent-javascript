class PGroup {
  // Your code here
  constructor(members) {
    this.members = members;
  }

  has(element) {
    return this.members.includes(element);
  }

  add(element) {
    if (this.has(element)) {
      return this;
    } else {
      return new PGroup(this.members.concat([element]));
    }
  }

  delete(element) {
    return new PGroup(this.members.filter(x => x !== element));
  }
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
