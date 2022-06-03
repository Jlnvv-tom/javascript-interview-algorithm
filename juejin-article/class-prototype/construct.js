function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sing = function () {
  return 'I can sing'
}

Person.prototype.dance = function () {
  return 'I can dance'
}

Person.prototype.rap = function () {
  return 'I can rap'
}

Person.prototype.selfIntroduction = function () {
  return `Hi I'am ${this.name}, ${this.age} years old this year, ${this.sing()},${this.dance()}, ${this.rap()}`
}

let me = new Person('周杰伦', 18)
let you = new Person('周星驰', 28)
let she = new Person('王心凌', 18)

console.log(me.sing());
console.log(you.selfIntroduction());
console.log(she.selfIntroduction());
console.log(me.__proto__ === Person.prototype);
console.log(you.__proto__ === Person.prototype);