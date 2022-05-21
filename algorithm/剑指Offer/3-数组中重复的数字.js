// 在长度为n 的数组里，数组的所有数都是0-n-的范围的数

function duplicate(arr) {
  let len = arr.length
  let res = [], map = new Map();

  // 边界值判断 
  if (len <= 0) return [] 
  for (let i = 0; i < len; ++i) {
    if (arr[i] < 0 || arr[i] > len - 1) return Error("数组的大小在0-n-1之间")
  }

  // 核心是使用哈希map对象实现
  arr.forEach(item => {
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
      res.push(item) // 重复的值直接放入res数组
    }
    else map.set(item, 1)
  })

  return res
}

let arr = [3, 1, 2, 0, 2, 5, 3, 5, 0, 10]
console.log(duplicate(arr));


function getDuplication(){

}