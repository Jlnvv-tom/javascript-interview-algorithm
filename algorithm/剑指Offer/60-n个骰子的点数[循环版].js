// 题目： 把n个骰子仍地上，所有骰子朝上一面的点数之和为s 
// 输入n ,打印s的所有可能的值出现的概率

let maxValue = 6

function printProbability(n) {
  if (n < 1) return
  let probabilities = [[], []]
  let maxSum = maxValue * n
  let flag = 0

  for (let i = 0; i < maxSum; i++) {
    probabilities[0][i] = 0
    probabilities[1][i] = 0
  }
  
  for(let i = 0; i <= maxValue; i++) {
    probabilities[flag][i] = 1
  }

}


// test

console.log(printProbability(2));