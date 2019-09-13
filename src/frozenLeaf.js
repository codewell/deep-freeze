/**
 * 
 * @param {*} accumulator 
 * @param {*} property 
 * @param {*} nextValue 
 */
const frozenLeaf = (accumulator, property, nextValue) => Object.freeze({
  ...accumulator,
  [property]: nextValue,
});

module.exports = frozenLeaf;