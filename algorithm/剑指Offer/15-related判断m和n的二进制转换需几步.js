// 题目：
// 判断m和n的二进制转换需几步, 如：1010 变为1101，需要转换三个数，

// 异或运算介绍

// 0 ^ 0 = 0; 0 ^ 1 = 1; 1 ^ 0 = 1; 1 ^ 1 = 0;
// 例： 4 ^ 6 = 100 ^ 110 = 010 = 2


function m_To_n_NeedStep(m, n) {
  let res = m ^ n // (1) 获取m、n 的异或运算结果
  let count = 0
  while (res) {
    if (res & 1) count++;
    res = res >> 1
  }
  return count  // (2) 返回m、n异或运算结果中 1 的个数就需要改变的位数。
}


console.log(m_To_n_NeedStep(10, 13)); // 3      1010 -> 1101 改动三位
console.log(m_To_n_NeedStep(4, 6)); // 1      100 -> 110 改动一位