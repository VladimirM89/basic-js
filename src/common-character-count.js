const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {

  let arrayS1, arrayS2;
  let result = 0;
  let resultObjS1 = {}
  let resultObjS2 = {}

  if (s1 === '' || s2 === '') return 0;
  arrayS1 = s1.split('');
  arrayS2 = s2.split('');

  arrayS1.forEach(item => {
    if (resultObjS1[item]) {
      resultObjS1[item] += 1;
    } else {
      resultObjS1[item] = 1
    }
  })

  arrayS2.forEach(item => {
    if (resultObjS2[item]) {
      resultObjS2[item] += 1;
    } else {
      resultObjS2[item] = 1
    }
  })

  for (let key1 in resultObjS1) {
    for (let key2 in resultObjS2) {
      if (key1 === key2) {
        result = result + Math.min(resultObjS1[key1], resultObjS2[key2])
      }
    }
  }

  return result
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
