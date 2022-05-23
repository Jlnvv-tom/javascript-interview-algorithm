
// 题目： 不用+-*/[四则运算] 实现两数相加函数

/**
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function Add(num1, num2) {
  let sum, carry

  while (num2 != 0) {
    sum = num1 ^ num2
    carry = (num1 & num2) << 1
    num1 = sum
    num2 = carry
  }

  return num1
}

// test

console.log(Add(10, 82));
console.log(Add(0, -2));
console.log(Add(-10, 2));