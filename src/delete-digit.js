const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  let Number
  let array = [];
  let resultArray = [];

  array = n.toString().split("");
  for (let i = 0; i < array.length; i++) {
    let tempArray = array.slice();
    tempArray.splice(i, 1);
    resultArray.push(parseInt(tempArray.join("")));
  }
  Number = Math.max(...resultArray)

  return Number;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
