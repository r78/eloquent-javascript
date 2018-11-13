// Your code here (and the code from the previous exercise)
class Group {
  constructor() {
    this.elements = [];
  }

  has(element) {
    return this.elements.indexOf(element) > -1;
  }

  add(element) {
    if (!this.has(element)) {
      this.elements.push(element);
    }
  }

  delete(element) {
    var pos = this.elements.indexOf(element);
    if (pos > -1) {
      this.elements.splice(pos, 1);
    }
  }

  delete2(element) {
    this.elements = this.elements.filter(x => x !== element);
  }

  static from(values) {
    var groupFrom = new Group();
    for (let v of values) {
      groupFrom.add(v);
    }
    return groupFrom;
  }
}

class GroupIterator {
  constructor(group) {
    this.i = 0;
    this.group = group;
  }
  next() {
    if (this.i >= this.group.elements.length) return {done: true};
    let value = this.group.elements[this.i];
    this.i += 1;
    return {value, done: false}
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
