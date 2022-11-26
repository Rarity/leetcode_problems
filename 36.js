/*
36. Valid Sudoku
https://leetcode.com/problems/valid-sudoku/

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 Example 1:


Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true


Example 2:
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

Constraints:
board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.

*/
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const hLine = new Set()
  const vLine = new Map()
  const square = new Map()
    for (let i =0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
      const isNumber = board[i][j] !== '.'
      if (!isNumber) {
        continue;
      }
      const quadrant = Math.floor(i/3) +"" + Math.floor(j/3)
      
      if (!square.has(quadrant)) {
        square.set(quadrant, [])
      }
      if (square.get(quadrant).includes(board[i][j])) {
        return false
      }

      if (square.has(quadrant)) {
        square.get(quadrant).push(board[i][j])
      }
      
      if (!vLine.has(j)) {
        vLine.set(j, [])
      }

      if (vLine.get(j).includes(board[i][j])) {
        return false
      }

      if (vLine.has(j)) {
        vLine.get(j).push(board[i][j])
      }



      if (hLine.has(board[i][j])) {
        return false
      }

      if (!hLine.has(board[i][j])) {
        hLine.add(board[i][j])
      }

      }
      hLine.clear()
    }

    return true
};



const sudoku = [
  [".",".",".",".","5",".",".","1","."],
  [".","4",".","3",".",".",".",".","."],
  [".",".",".",".",".","1",".",".","2"],
  ["8",".",".",".",".",".",".","2","."],
  [".",".","2",".","7",".",".",".","."],
  [".","1","5",".",".",".",".",".","."],
  [".",".",".",".",".","2",".",".","."],
  [".","2",".","9",".",".",".",".","."],
  [".",".","4",".",".",".",".",".","."]
]

console.log(isValidSudoku(sudoku))
