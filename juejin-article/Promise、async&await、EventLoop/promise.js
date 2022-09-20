// const funcs = [() => 123, () => 456, () => 789]

// const applyAsync = (acc,val) => acc.then(val);
// const composeAsync = (...funcs) => x => funcs.reduce(applyAsync, Promise.resolve(x));

// console.log(funcs, composeAsync());

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait().then(() => console.log(4));
Promise.resolve().then(() => console.log(2)).then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
