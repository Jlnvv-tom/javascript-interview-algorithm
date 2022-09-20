const add = (...args) => args.reduce((a, b) => a + b);

// 简化写法
function currying(func) {
  const args = [];
  return function result(...rest) {
    if (rest.length === 0) {
      return func(...args);
    } else {
      args.push(...rest);
      return result;
    }
  }
}

const sum = currying(add);

console.log(sum(1, 2)(3));; // 未真正求值
console.log(sum(4));; 		 // 未真正求值
console.log(sum());			 // 输出 10