class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static konfu() {
    return 'I can play konfu'
  }
  sing() {
    return 'I can sing'
  }
  dance() {
    return 'I can dance'
  }
  rap() {
    return 'I can rap'
  }
  selfIntroduction() {
    return `I am ${this.name}, ${this.age} years old this year`
  }
}

class Monkey extends Person {
  eatBanana() {
    return 'I can eat banana'
  }
}

let person = new Person('李白', 20)
let monkey = new Monkey('美猴王', 500)
console.log(person.selfIntroduction()); // I am 李白, 20 years old this year
console.log(monkey.selfIntroduction()); // I am 美猴王, 500 years old this year
console.log(monkey.eatBanana()); // I can eat banana
console.log(person.eatBanana()); // error



// let person = new Person('李白', 20)
// console.log(person.selfIntroduction()); // I am 李白, 20 years old this year
// console.log(Person.konfu()); // I can play konfu
// console.log(person.konfu());  // error
