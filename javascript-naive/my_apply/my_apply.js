
/**
 * 
 * @param {*} context 设置默认值为window
 * @returns 
 */
Function.prototype.my_apply = function (context = window) {

  context.fn = this
  let result
  // 根据是否传入数组参数给result赋值
  if (arguments.length > 1) {
    result = context.fn(arguments[1])
  } else {
    result = context.fn()
  }

  delete context.fn

  return result
}


// test   


let foo = {
  value: 'Hi',
  sayHi(){
    console.log(this.value);
  }
}

function bar(arr) {
  console.log(...arr);
  console.log(this.sayHi());
}

bar.my_apply(foo, ['小李', 20]) // '小李', 20 Hi

