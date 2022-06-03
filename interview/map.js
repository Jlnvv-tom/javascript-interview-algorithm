
// let map = new Map();
// map.set('tom', 18)
// map.set('jack', 28)
// console.log(map.entries()); // [Map Entries] { [ 'tom', 18 ], [ 'jack', 28 ] } 得到二维数组

function minNumberDisappeared( nums ) {
  let map = new Map() // 创建map对象
  let n = nums.length // 数组长度
  for(let i = 0; i<n; i++){
      // 如果nums中的每一项值由在 1-n区间内， 就把它记录到map对象中
      if(!map.has(nums[i])) map.set(nums[i], 1)
  }
  console.log(map);
  let res = 1
  while(map.has(res)) res++
  return res
}

let arr = [12,2,1,3,2,36,75,-1,-34,-89]
console.log(minNumberDisappeared(arr));