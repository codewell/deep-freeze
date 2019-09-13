const frozenLeaf = require('./frozenLeaf');
const branch = require('./branch');

/**
 * 
 * @param {*} object 
 * @param {*} deepFreeze 
 */
const reducer = (object, deepFreeze) => (accumulator, property) => {
  const nextValue = object[property];

  if (typeof nextValue === 'object' && !Array.isArray(nextValue)) {
    // Branch into next level of the recursion
    return branch(accumulator, property, nextValue, deepFreeze);
  }

  // Freeze the leaf of the object
  return frozenLeaf(accumulator, property, nextValue);
};

module.exports = reducer;
