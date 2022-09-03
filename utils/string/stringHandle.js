
/**
 * 获取字符串长度，英文字符 长度1，中文字符长度2
 * @param {*} str 
 * @returns 
 */
const getStrFullLength = (str = '') =>
  str.split('').reduce((pre, cur) => {
    const charCode = cur.charCodeAt(0)
    if (charCode >= 0 && charCode <= 128) {
      return pre + 1
    }
    return pre + 2
  }, 0)



  let str = '123456qwerty你好'

  console.log(getStrFullLength(str));