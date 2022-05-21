// 题目：
// 二维数组中每一行从左到右递增， 每一列从上到下递增顺序，
// 输入一个数，判断是否在二维数组中，返回true或false

/**
 * 
 * @param {*} arr 二维数组
 * @param {*} rows 多少行
 * @param {*} columns 多少列表
 * @param {*} num 要查找的数
 */
function findNum(arr, rows, columns, num) {
  let found = false

  if (arr.length > 0 && rows > 0 && columns > 0) {
    let row = 0
    let column = columns - 1

    while (row < rows && column >= 0) {
      if (arr[row][column] == num) {
        found = true
        break
      } else if (arr[row][column] > num) {
        --column
      } else {
        ++row
      }
    }
  }

  return found
}

let arr = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 7, 11, 15],
]

console.log(findNum(arr, 4, 4, 10));
