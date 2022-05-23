
// 不新增新的变量的情况下，交换两数

function swap_planA(a, b) {
  console.log(a, b);
  a = a + b
  b = a - b
  a = a - b
  console.log(a, b);
}

function swap_planB(a, b) {
  console.log(a, b);
  a = a ^ b
  b = a ^ b
  a = a ^ b
  console.log(a, b);
}



// test 


console.log(swap_planA(1, 2));
console.log(swap_planA(1, 100));
console.log('-----------------华丽分割线---------------');
console.log(swap_planB(1, 100));