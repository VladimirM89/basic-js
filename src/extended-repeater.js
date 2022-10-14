const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let addStr = '';
  let fullStr = '';

  if (options.additionRepeatTimes) {
    for (let i = 1; i <= options.additionRepeatTimes; i++) {
      addStr = addStr + (i === 1 ? str : '') + options.addition + (i === options.additionRepeatTimes ? '': (options.additionSeparator ? options.additionSeparator : '|'));
    }
  } else {
    addStr = str + (options.addition ? options.addition : '')
  }

  if (options.repeatTimes) {
    for (let i = 1; i <= options.repeatTimes; i++) {
      fullStr = fullStr + addStr + (i === options.repeatTimes ? '': (options.separator ? options.separator : '+'))
    }
  } else {
    fullStr = addStr
  }



  return fullStr;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
