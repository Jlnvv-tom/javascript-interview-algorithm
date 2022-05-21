// 题目：
// 把字符串中的每个空格替换为"%20"
// 例如：' we are happy ', 输出 'we%20are%20happy'

function replaceBlank(str) {
  let arr = str.split(' ')
  return arr.join('%20')
}

function replaceBlank_planB(str) {
  return str.replaceAll(' ', '%20')
}


function replaceBlank_planC(str) {
  let re = /\s/g
  return str.replace(re, '%20')
}

let str = 'we are happy'
// console.log(replaceBlank(str));
// console.log(replaceBlank_planB(str));
console.log(replaceBlank_planC(str));
