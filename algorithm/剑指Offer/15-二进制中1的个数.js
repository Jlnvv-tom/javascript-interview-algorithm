// 题目：
// 输入一个整数，输出该数二进制表示中1的个数，
// 例如： 9用二进制表示为1001， 那么有两位是1 ，输出为2

function NumberOfOne(n) {
  let count = 0;
  while (n) {
    if (n & 1) { // (1) 判断二进制的最右边一位是否为 1。
      count++;  // （2） 是 1 就计数加一
    }
    n = n >> 1; // （3）n 向右移动一位（除于2），下一轮判断时就是判断原始n的倒数第二位了
  }
  return count;
}

// 如果输入的n 是负数的话
function NumberOfOne_planB(n) {
  let count = 0, flag = 1
  while (flag) {
    if (n & flag) count++;
    flag = flag << 1
  }
  return count;
}


// test 

// console.log(NumberOfOne(63));
console.log(NumberOfOne_planB(-19));
