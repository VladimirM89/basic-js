const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let resArray
  try {

    if (arr.length === 0) {
      return []
    } else if (Array.isArray(arr)) {
      resArray = [...arr];
      for (let i = 0; i < arr.length; i++) {

        if (resArray[i] === "--discard-prev" && i === 0) {
          resArray.splice(i, 1);
          } else if (resArray[i] === "--discard-prev" && i !== 0) { resArray.splice(i-1, 2)}
        if (resArray[i] === '--discard-next' && i === arr.length - 1) {
          resArray.splice(i, 1);
        } else if (resArray[i] === '--discard-next' && i !== arr.length - 1) { if (arr.includes('--double-prev') || arr.includes('--discard-prev')) {resArray.splice(i, 3)} else {resArray.splice(i, 2)}}
        if (resArray[i] === '--double-prev' && i === 0) {
          resArray.splice(i, 1);
        } else if (resArray[i] === '--double-prev' && i !== 0) {resArray.splice(i, 1, arr[i-1])}
        if (resArray[i] === '--double-next' && i === arr.length-1) {
          resArray.splice(i, 1)
        } else if (resArray[i] === '--double-next' && i !== arr.length-1) {resArray.splice(i, 1, arr[i+1])}
      }

    } else { throw new Error("\'arr\' parameter must be an instance of the Array!")}


  }
  catch(e) {
    throw new Error("\'arr\' parameter must be an instance of the Array!")
  }

  return resArray;

 
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
