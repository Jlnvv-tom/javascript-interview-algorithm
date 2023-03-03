// 问题描述： 有一个嵌套对象 如下 raw_obj它下面的属性 names、values、units 都有共同二级对象属性， a_count、b_count、c_count这些。
// 对前端而言接收 [{}]这种结构的数据是最好遍历的，如下： target_arr


/**
 * 一个待处理的嵌套对象
 */
let raw_obj = {
  name: {
    a_count: 'a的数值大小',
    c_count: 'a的数值大小',
    c_count: 'a的数值大小',
  },
  value: {
    a_count: '12',
    c_count: '23',
    c_count: '34',
  },
  unit: {
    a_count: '个',
    c_count: '万个',
    c_count: '次',
  }
};
let target_arr = [
  { name: 'a的数值的大小', value: '12', unit: '个' },
  // ... 
]

/**
 * 
 * @param {*} obj 传入一个待处理的对象
 * @returns  返回处理后的数组
 */
function objectToArray(obj) {
  const random_attr = Object.keys(obj)[0]
  const factor_arr = Object.keys(obj[random_attr])
  factor_arr.map(item => {
    Object.keys(obj).forEach(_item => {
      // todo
    })

  })
  return []
}

console.log(`output->objectToArray(raw_obj)`, objectToArray(raw_obj))