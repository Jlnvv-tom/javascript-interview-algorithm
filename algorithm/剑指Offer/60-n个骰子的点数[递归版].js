// 题目： 把n个骰子仍地上，所有骰子朝上一面的点数之和为s 
// 输入n ,打印s的所有可能的值出现的概率


let maxValue = 6 // 一个骰子最大点数为6

function printProbability(n) {
  if (n < 1) return
  let maxSum = n * maxValue // n个骰子最大点数和
  let total = Math.pow(maxValue, n) // n 个骰子所有点数的排列组合数
  let probabilities = [] // 保存和为s的点数出现的次数
  for (let i = n; i <= maxSum; ++i) {
    probabilities[i - n] = 0 // 初始化probabilities的每项为0
  }
  probability(n, probabilities) // 递归统计每个点出现的次数保存在probabilities数组里
  for (let i = n; i <= maxSum; ++i) {
    let ratio = probabilities[i - n] / total // 计算对应点数出现的概率
    let res = ratio.toFixed(6)
    console.log(`${i}: ${res} %`);
  }
}

function probability(n, probabilities) {
  for (let i = 1; i <= maxValue; ++i) {
    probabilityRecursion(n, n, i, probabilities)
  }
}

function probabilityRecursion(original, current, sum, probabilities) {
  if (current == 1) {
    probabilities[sum - original]++
  } else {
    for (let i = 1; i <= maxValue; ++i) {
      probabilityRecursion(original, current - 1, i + sum, probabilities)
    }
  }
}

// test 

console.log(printProbability(2));