const deepFreeze = require('../src');

/**
 * Empty object
 */
test('Empyt object.', () => {
  expect(deepFreeze({})).toEqual({});
});

/**
  * Object with one layer
  */
const obj2 = {
  one: 1,
  two: 2,
};

test('Object with one layer.', () => {
  const res = deepFreeze(obj2);
  res.one = 'x';
  res.two = 'x';
  expect(res).toEqual({ one: 1, two: 2 });
});
/**
  * Object with two layers
  */

const obj3 = {
  one: {
    one: 1,
    two: 2,
  },
  two: {
    two: 2,
    four: 4,
  },
  three: 'three',
  arr: ['one', 2, { foo: 'bar' }],
};

test('Object with one layer.', () => {
  const res = deepFreeze(obj3);
  console.log(res);
  res.one.one = 'x';
  res.one.two = 'x';
  res.two.two = 'x';
  res.two.four = 'x';
  res.three = 'x';

  expect(res).toEqual({
    one: {
      one: 1,
      two: 2,
    },
    two: {
      two: 2,
      four: 4,
    },
    three: 'three',
    arr: ['one', 2, { foo: 'bar' }],
  });
});


/**
  * Object with three layers
  */