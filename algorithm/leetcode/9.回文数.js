/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  let s = x.toString()
  let len = s.length
  if(len < 2) return false
  let end = len
  for(let i = 0;i<len; i++){
     if(s[i] !== s[end]) return false
     end--
  }
  return true
 };
 console.log(isPalindrome(10));