/* Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let currChar = ""
    let resStr = ""

    strs.sort((a,b) => a.length - b.length)
    console.log(strs)
    //first elem letters
    for (let i = 0; i < strs[0].length; i++) {
      currChar = strs[0][i]
      let correct = currChar
      //arrays
      for (let j = 0; j < strs.length; j++ ) {
        
        if (currChar !== strs[j][i]) {
          return resStr
        }
      }
      resStr += correct
    }

    return resStr
};


// console.log(longestCommonPrefix(["cir","car"]))
console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))
