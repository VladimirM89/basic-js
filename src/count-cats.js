const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {

  let Number = 0;
  //if (!Array.isArray(matrix)) {console.log('test')};
  matrix.forEach(item => {
    item.forEach(item1 => {
      console.log(item, item1);
      (typeof item1 === 'string' && item1 === "^^") ? Number++ : Number;
      console.log(Number);
    })
  })

  return Number;

  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  countCats
};
