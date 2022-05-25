// 现在有2副扑克牌，从扑克牌中随机五张扑克牌，我们需要来判断一下是不是顺子。
// 有如下规则：
// 1. A为1，J为11，Q为12，K为13，A不能视为14
// 2. 大、小王为 0，0可以看作任意牌
// 3. 如果给出的五张牌能组成顺子（即这五张牌是连续的）就输出true，否则就输出false。
// 4.数据保证每组5个数字，每组最多含有4个零，数组的数取值为 [0, 13]


function isContinuous(numbers, length) {
  if (numbers.length < 1 || length < 1) return false;
  numbers.sort((a, b) => a - b)

  let numberOfZero = 0, numberOFGap = 0

  // 统计数组中0的个数
  for (let i = 0; i < length; i++) {
    if (numbers[i] == 0) numberOfZero++
  }

  let small = numberOfZero, big = small + 1

  while (big < length) {
    if (numbers[small] == numbers[big]) return false
    numberOFGap += numbers[big] - numbers[small] - 1
    small = big
    ++big
  }

  return (numberOFGap > numberOfZero) ? false : true
}

let n1 = [1, 2, 3, 4, 5]
let n2 = [1, 2, 9, 4, 0]
let n3 = [5, 7, 6, 4, 8]

console.log(isContinuous(n1, 5));
console.log(isContinuous(n2, 5));
console.log(isContinuous(n3, 5));
