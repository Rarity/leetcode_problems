/**
 * https://leetcode.com/problems/missing-number/
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  return (n * (n + 1)) / 2 - nums.reduce((acc, i) => acc + i, 0);
};
