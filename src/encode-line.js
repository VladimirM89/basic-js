const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  let resultStr ='';
  let obj = {};
  let counter = 1
  
  for (let i=0; i < str.length; i++) {

    if (str[i] === str[i+1]) {
      counter++;
      console.log(str[i], str[i+1], counter)
    } else {
      resultStr = resultStr + (counter === 1 ? '' : counter)+str[i];
      counter = 1
    }
    
  }

  return resultStr;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
