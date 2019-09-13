const reducer = require('./reducer');

/**
 * Deep freeze a json object
 * @param {object} object 
 */
const deepFreeze = (object) => Object.getOwnPropertyNames(object)
  .reduce(reducer(object, deepFreeze), {});

module.exports = deepFreeze;