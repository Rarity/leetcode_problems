//fibonaci

/**
 * @param {number} n
 * @return {number}
 */

const cache = [0, 1];
var fib = function (n) {
  if (n == 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

console.log(fib(2), 1);
console.log(fib(4), 3);
console.log(fib(5), 5);
console.log(fib(6), 8);
