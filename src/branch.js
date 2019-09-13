/**
 * 
 * @param {*} accumulator 
 * @param {*} property 
 * @param {*} nextValue 
 * @param {*} deepFreeze 
 */
const branch = (accumulator, property, nextValue, deepFreeze) => ({
  ...accumulator,
  [property]: deepFreeze(nextValue),
});

module.exports = branch;
