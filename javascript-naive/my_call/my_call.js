
/**
 * 
 * @param {*} context 默认指向window
 * @returns 
 */
Function.prototype.my_call = function (context = window) {

  context.fn = this  // 函数的this指向当前this

  let args = [...arguments].slice(1) // 参数 如： func.call(this, a,b,c) 中, a,b,c 部分

  let result = context.fn(...args) // 函数call调用后返回的结果
  delete context.fn  // 删除属性

  return result
}


// test 


let foo = {
  value: 2
}

function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}

bar.my_call(foo, '张三', '18') // 张三 18 2

