// let obj = {
//   prop1: 123,
//   prop2: 'abc',
//   prop3: [1, 2, 3],
//   prop4: function () { },
//   prop5: {}
// };

// obj.prop6 = 'hello world';

// console.log(obj);

// const tom = { english: 'hello world' };
// const jack ={ china: '你好世界'}
// const gogo = { language: 'gogo'}

// console.log(gogo.english); // undefined

// Object.setPrototypeOf(gogo, tom)

// console.log(gogo.english); // 'hello world'

// console.log(gogo.china);
// Object.setPrototypeOf(tom, jack) // ------- 让tom ,继承jack-----
// console.log(gogo.china); // 你好世界
// console.log(gogo.english);  // hello world

console.log(Array instanceof Object); // true
console.log(String instanceof Object); // true
console.log(Function instanceof Object); // true
console.log(Number instanceof Object); // true
console.log(Math instanceof Object); // true
console.log(RegExp instanceof Object);  // true
console.log(Boolean instanceof Object);  // true
console.log(Symbol instanceof Object);  // true
console.log(Date instanceof Object); // true
