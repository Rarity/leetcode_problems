/*
https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
 
Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  
  if (s.length % 2 !== 0) {
    return false
  }
  const map = new Map()
  map.set('}', '{')
  map.set(')', '(')
  map.set(']', '[')

  const opend = []
  for (let bracket of s) {
    if (!map.has(bracket)) {
      opend.push(bracket)
    } else {
      if (map.get(bracket) === opend[opend.length - 1]) {
        opend.pop()
      } else {
        return false
      }
    }

  }

  return !opend.length
};


console.log(isValid('([}}])'), false)
console.log(isValid(']'), false)
console.log(isValid('([)]'), false)
console.log(isValid('(())'), true)
console.log(isValid('({[]})'), true)
console.log(isValid('['), false)
console.log(isValid('()'), true)
console.log(isValid('()[]{}'), true)
console.log(isValid('[}'), false)