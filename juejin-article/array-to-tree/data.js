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
 * 
 * @param {*} data 树结构的数组
 * @returns 
 */
function treeToArray(data) {
  return data.reduce((pre, cur) => {
    console.log("cur", cur, pre);
    //此处将对象的children属性和值都解构在空数组中，将对象的其他属性和值都解构在i里面。
    const { children = [], ...item } = cur;   // 注意children = [] 给默认值，防止最后一项没有children报错， ...item 只能写在解构赋值的末尾，否则报错
    // console.log("item",item);
    // console.log("children",children);
    return pre.concat([{ ...item }], treeToArray(children))  //利用递归回调,数组合并,注意此处 {...i}是解构
  }, []);
}

// console.log(treeData);
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
 * @param {*} list 数组数据
 * @returns 
 */
function arrayToTree(list) {
  const result = [];
  const remap = list.reduce((pre, cur) => {  //###第一步：将数组转换成键值对的形式(键是id值，值是对象)
    console.log("cur",cur);
    pre[cur.id] = cur
    console.log("pre",pre);
    return pre
  }, {})
  console.log("remap",remap);
  //###第二步，循环遍历数组，判断是不是(树状结构最外层，祖宗层数据)第一层的数据(本处就是parent_id等不等于0)
  for (let item of list) {  //用普通的for循环也行，但是用for in 不行,只能获取数组的元素下标,或者对象的键
    console.log(item);
    if (item.parent_id === 0) {
      result.push(item)
      continue
    }
    // console.log(item.parent_id);
    // console.log(remap[item.parent_id]); //注意 obj[key] 就代表是对象的值value
    if (item.parent_id in remap) {   //换成else也可，目的将不是第一层的数据(parent_id不等于0)挑出来，并赋予一个children属性
      const parent = remap[item.parent_id];
      parent.children = parent.children || [];
      // console.log(parent);
      parent.children.push(item);
      //console.log(parent);
    }
  }

  // console.log(result);
  return result

}
console.log(arrayToTree(arrayData));



