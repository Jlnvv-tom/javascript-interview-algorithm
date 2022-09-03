console.log(Object.is({ a: 123 }, { a: 123 }));

console.log({ a: 123 } === { a: 123 });
console.log({ a: 123 } == { a: 123 });

let foo = { a: 123 }
console.log(Object.is(foo, foo));