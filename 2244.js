/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
  const taskAmountByLevel = new Map();
  let count = 0;
  tasks.forEach((taskLvl) => {
    if (!taskAmountByLevel.get(taskLvl)) {
      taskAmountByLevel.set(taskLvl, 1);
    } else {
      taskAmountByLevel.set(taskLvl, taskAmountByLevel.get(taskLvl) + 1);
    }
  });
  for (let [key, value] of taskAmountByLevel) {
    let currAmount = value;
    while (currAmount > 0) {
      if (currAmount === 1) {
        return -1;
      }

      if (currAmount - 3 === 0 || currAmount - 3 >= 2) {
        currAmount = currAmount - 3;
        count++;
        continue;
      }

      if (currAmount - 2 >= 0 || currAmount - 2 >= 2) {
        currAmount = currAmount - 2;
        count++;
        continue;
      }
    }
  }
  return count ? count : -1;
};

console.log(minimumRounds([1, 1, 1, 1, 1])); // 2
console.log(minimumRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4])); // 4
console.log(minimumRounds([2, 3, 3])); // -1
