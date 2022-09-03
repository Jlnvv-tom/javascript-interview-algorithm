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
 * 根据id查找所在目录路径
 * @param {树结构的数组数据} tree 
 * @param {要查找的id} id 
 * @param {初始路径} path 
 * @returns 
 */
function parseTreePath(tree, id, path = "") {
  for (let i = 0; i < tree.length; i++) {
    let tempPath = path;
    tempPath = `${tempPath ? tempPath + "/ " : tempPath}${tree[i].title}`; // 避免出现在最前面的/
    if (tree[i].id == id) return tempPath;
    else if (tree[i].children) {
      let reuslt = parseTreePath(tree[i].children, id, tempPath);
      if (reuslt) return reuslt;
    }
  }
};
console.log(parseTreePath(treeData, 5));