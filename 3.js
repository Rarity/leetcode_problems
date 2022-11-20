// 3. Longest Substring Without Repeating Characters
/*
Given a string s, find the length of the longest substring without repeating characters.

Constraints:
 - 0 <= s.length <= 5 * 104
 - s consists of English letters, digits, symbols and spaces.


Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const usedChar = new Set()
  let count = 0
  let l = 0
  // if (s.length === 0) { return 0 }
  // if (s.length === 1 ) { return 1 }

  for (let i = 0; i < s.length; i++) {
    while (usedChar.has(s[i])) {
      usedChar.delete(s[l])
      l++
    }
    usedChar.add(s[i])
    count = Math.max(count, i - l + 1)
  }

  return count
};



console.log(lengthOfLongestSubstring(''))
console.log(lengthOfLongestSubstring(' '))
console.log(lengthOfLongestSubstring('au'))
console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('dvdf'))
