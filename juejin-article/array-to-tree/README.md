## 树结构转一维数组

```JavaScript

/**
 * 
 * @param {*} data 树结构的数组数据
 * @returns 
 */
function treeToArray(data) {
  return data.reduce((pre, cur) => {
    const { children = [], ...item } = cur;  
    return pre.concat([{ ...item }], treeToArray(children)) 
  }, []);
}
// console.log(treeData);
console.log(treeToArray(treeData));



```

[reduce() 方法对数组中的每个元素按序执行一个由您提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

[concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)