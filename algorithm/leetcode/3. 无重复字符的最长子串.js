// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew" 
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。


/**
 * 时间复杂度O(n)
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function (s) {
  let  len = s.length
  let hash = {} // 用来存储当前字符对应的位置，例如： {a:4,b:8,a:12}
  let left = 0, maxLen = 0
  if (len < 2) return len // 处理边界
  for (let right = 0; right < len; right++) {
    let cur = s[right] // 当前字符
    if (cur in hash) {  // 判断当前字符是否再hash表中
      if (hash[cur] + 1 > left) left = hash[cur] + 1
    }
    hash[cur] = right // 记录当前字符 为当前right索引
    maxLen = Math.max(maxLen, right - left + 1) // maxLen 保存每一轮结果的大值
  }
  return maxLen
};

/**
 * 两层循环时间复杂度O(n^2)
 * @param {*} s 
 * @returns 
 */
function lengthOfLongestSubstring_planB(s) {
  let len = s.length, maxLen = 0
  let set = new Set(); // 记录从每个字符开头，最长不重复的字符数量
  if (len < 2) return len // 边界值判断
  for (let i = 0; i < len; i++) { // 以每个字符开头做一次遍历
    let tempLen = 0
    for (let j = i; j < len; j++) { 
      if (!set.has(s[j])) set.add(s[j]) // 统计以当前字符开头，它后面有几个不重复的字符
      else {
        tempLen = set.size // 遇到重复字符时保存之前字符数
        set.clear() // 清空set
        break  // 跳出这轮循环
      }
    }
    if (tempLen > maxLen) maxLen = tempLen
  }
  return maxLen
}

// test 

let str = "pwwkew"
let str1 = "abcddaac"
let str2 = "wjhnbyyds"
console.log(lengthOfLongestSubstring(str));
console.log(lengthOfLongestSubstring(str1));
console.log(lengthOfLongestSubstring(str2));
console.log(lengthOfLongestSubstring(''));

// console.log(lengthOfLongestSubstring_planB(str));
// console.log(lengthOfLongestSubstring_planB(' '));
// console.log(lengthOfLongestSubstring_planB(''));


