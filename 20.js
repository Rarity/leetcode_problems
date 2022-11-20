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

  const isOpenBracket = (b) => ['(', '[', '{'].some(i => b === i)
  const isCLosedBracket = (b) => [')', ']', '}'].some(i => b === i)

  const opend = []
  for (let bracket of s) {
    if (isOpenBracket(bracket)){
      opend.push(bracket)
    }
    
    if (isCLosedBracket(bracket) && opend.length === 0) { return false }


    if (isCLosedBracket(bracket)){
      if (bracket === ')' && opend[opend.length - 1] === '(') {
        opend.pop()
      } else if (bracket === '}' && opend[opend.length - 1] === '{') {
        opend.pop()
      } else if (bracket === ']' && opend[opend.length - 1] === '[') {
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