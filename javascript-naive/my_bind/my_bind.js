

// bind 方法会创建一个新的函数，在 bind() 被调用时，
// 这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
// 实现要点：

// bind() 除了 this 外，还可传入多个参数；
// bing 创建的新函数可能传入多个参数；
// 新函数可能被当做构造函数调用；
// 函数可能有返回值；

/**
 * 
 * @param {*} context 
 * @returns 
 */
Function.prototype.my_bind = function (context) {
  let fn = this
  // let args = Array.prototype.slice.call(arguments,1) // 没有ES6的展开参数[...]之前这样获取参数
  let args = [...arguments].slice(1) // 参数

  let tempFn = function () { } // 临时函数

  // bind调用返回的新函数
  let resultFn = function () {
    return fn.apply(this instanceof tempFn ? this : context, args.concat(...arguments))
  }

  tempFn.prototype = this.prototype // 这两步是，当返回出去的resultFn 函数被当作构造函数调用的时候，
  resultFn.prototype = new tempFn() // 确保构造函数的对象的原型链正确

  return resultFn

}

// test     

const foo = {
  x: 42,
  getX: function () {
    return this.x;
  }
};

const unboundGetX = foo.getX;
console.log(unboundGetX()); // undefined, The function gets invoked at the global scope

const boundGetX = unboundGetX.my_bind(foo);
console.log(boundGetX()); // 42  ,区别于call 和 apply, bind返回的是一个函数，所以要执行调用才有值

