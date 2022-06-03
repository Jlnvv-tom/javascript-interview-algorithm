const person = {
  isHuman: false,
  printIntroduction: function () {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  },
  foo: 123,
  bar: 'abc',
  sing() {
    return 'I can sing'
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
console.log(me.foo); // 123
console.log(me.sing()); // I can sing
// expected output: "My name is Matthew. Am I human? true"
