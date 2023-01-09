/**
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root, arr = []) {
  if (!root) return [];
  arr.push(root.val);
  preorderTraversal(root.left, arr);
  preorderTraversal(root.right, arr);
  return arr;
};
