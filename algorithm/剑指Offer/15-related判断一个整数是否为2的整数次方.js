// 题目：
// 用一条语句判断一个整数是否为2的整数次方

// 与运算 & 介绍 ，， 
// 例如：1 & 1= 1  ， 1 & 0 = 0， 0 & 1 = 0 
// 例： 4 & 6 = 100 & 110 = 100 = 4
// 例： 8 & 7 = 1000 & 0111 = 0000 = 0， 注意：这里7 不够位，就往前面补零，111 -> 0111。 

function isTwoPower(n) {
  return ((n - 1) & n) ? false : true;
}

// test 

console.log(isTwoPower(64));
console.log(isTwoPower(35));
console.log(isTwoPower(4));
console.log(isTwoPower(128));