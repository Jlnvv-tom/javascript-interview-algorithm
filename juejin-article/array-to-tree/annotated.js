
const treeData = require('./data.js')

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
console.log(treeToArray(treeData));


