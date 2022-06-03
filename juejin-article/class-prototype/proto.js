function Foo() {}
Foo.prototype.sayHi = function () {
  return 'Hello'
}

Function.prototype.naiveFunc = function () {
  return 'I am Function'
}

Object.prototype.navieObj = function () {
  return 'I ma navieObj'
}

let foo = new Foo()

console.log(foo.__proto__);
console.log(foo.prototype);
// console.log(foo.prototype.__proto__);

console.log(Foo.__proto__);
console.log(Foo.prototype);
console.log(Foo.prototype.__proto__);

console.log(Function.__proto__);
console.log(Function.prototype);
console.log(Function.prototype.__proto__);

console.log(Object.__proto__);
console.log(Object.prototype);
console.log(Object.prototype.__proto__);

// console.log(foo.__proto__ === Foo.prototype); // true
// console.log(Foo.__proto__ === Function.prototype); // true
// console.log(Function.__proto__ === Object.__proto__); // true

// console.log(foo instanceof Foo); // true
// console.log(Foo instanceof Function); // true
// console.log(Function instanceof Object); // true
