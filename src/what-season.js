const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

  try {
    let month;
    if (date === undefined || date === null) {
      return 'Unable to determine the time of year!'
    } else if (date.constructor === Date && !isNaN(date)) {
      month = date.getMonth();
        if (month === 11 || month === 0 || month === 1) {
        resultStr = 'winter';
        } else if (month >= 2 && month <= 4) {
          resultStr = 'spring';
        } else if (month >= 5 && month <= 7) {
          resultStr = 'summer';
        } else if (month >= 8 && month <= 10) {
          resultStr = 'autumn';
        }
    } else {
      throw new Error ('Invalid date!')
    }
  }
  
  catch (e) {
    throw new Error ('Invalid date!')
  }
  
  // let resultStr = '';
  
  // if (isNaN(date)) {
  //   return 'Unable to determine the time of year!'
  // } else if (Object.prototype.toString.call(date) !== "[object Date]") {
  //   throw new Error ('Invalid date!')
  // } else {
  //   let month = date.getMonth();



  // if (month === 11 || month === 0 || month === 1) {
  //   resultStr = 'winter';
  // } else if (month >= 2 && month <= 4) {
  //   resultStr = 'spring';
  // } else if (month >= 5 && month <= 7) {
  //   resultStr = 'summer';
  // } else if (month >= 8 && month <= 10) {
  //   resultStr = 'autumn';
  // }
  // }
  

  return resultStr
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
