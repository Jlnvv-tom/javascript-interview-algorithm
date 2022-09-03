
/** 树状形结构数据treeData */
const treeData = [
  {
    id: 2, title: '中国', parent_id: 0,
    children: [
      {
        id: 3, title: '广东省', parent_id: 2,
        children: [
          {
            id: 4, title: '广州市', parent_id: 3,
            children: [
              { id: 5, title: '天河区', parent_id: 4 }
            ]
          }
        ]
      },
      { id: 6, title: '湖南省', parent_id: 2 }
    ]
  },
  { id: 1, title: '俄罗斯', parent_id: 0, },
]

/**
 * 树结构数组扁平化
 * @param {*} data 树结构的数组
 * @returns 
 */
function treeToArray(data) {
  return data.reduce((pre, cur) => {
    const { children = [], ...item } = cur;
    return pre.concat([{ ...item }], treeToArray(children))
  }, []);
}
// console.log(treeToArray(treeData));

/** 数组结构数据 */
const arrayData = [
  { id: 2, title: '中国', parent_id: 0 },
  { id: 3, title: '广东省', parent_id: 2 },
  { id: 4, title: '广州市', parent_id: 3 },
  { id: 5, title: '天河区', parent_id: 4 },
  { id: 6, title: '湖南省', parent_id: 2 },
  { id: 1, title: '俄罗斯', parent_id: 0 }
]

/**
 * 数组结构转为树结构
 * @param {*} data 数组数据
 * @returns 
 */
function arrayToTree(data) {
  const result = []
  const obj = data.reduce((pre, cur) => {
    pre[cur.id] = cur
    return pre
  }, {})
  for (let item of data) {
    if (item.parent_id === 0) {
      result.push(item)
      continue
    }
    if (item.parent_id in obj) {
      const parent = obj[item.parent_id];
      parent.children = parent.children || [];
      parent.children.push(item);
    }
  }
  return result
}
// console.log(arrayToTree(arrayData))



function flatten(data) {
  // for(const item of data) {

  // }
  while (data.some(item => Array.isArray(item.children))) {
    console.log('111111111', ...data)
    data = [].concat(...data)
    console.log('2222222222222', data)
  }
  return data
}
const arr = [1, [[2, 3], 4], 5]
console.log(flatten(treeData));