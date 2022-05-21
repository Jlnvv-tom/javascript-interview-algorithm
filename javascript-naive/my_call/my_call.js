
/**
 * 
 * @param {*} context 
 * @returns 
 */
Function.prototype.my_call = function (context = window) {

  context.fn = this

  let args = [...arguments].slice(1)

  let result = context.fn(...args)
  delete context.fn

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

bar.my_call(foo, '张三', '18')

