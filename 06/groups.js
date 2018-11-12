class Group {
  // Your code here.
  constructor() {
    this.group = [];
  }

  has(element) {
    return this.group.indexOf(element) > -1;
  }

  add(element) {
    if (!this.has(element)) {
      this.group.push(element);
    }
  }

  delete(element) {
    var pos = this.group.indexOf(element);
    if (pos > -1) {
      this.group.splice(pos, 1);
    }
  }

  delete2(element) {
    this.group = this.group.filter(x => x !== element);
  }

  static from(values) {
    var groupFrom = new Group();
    for (let v of values) {
      groupFrom.add(v);
    }
    return groupFrom;
  }

}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
