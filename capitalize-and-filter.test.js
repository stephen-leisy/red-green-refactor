const capitalizeAndFilter = require('./capitalize-and-filter.js');

describe('capitalize and filter', () => {
  it('it should take in an array and return an array with all letters capitalized and no strings that start with F', () => {
    const myArray = ['hello', 'my', 'friend'];
    const myNewArray = capitalizeAndFilter(myArray);

    expect(myNewArray).toEqual(['HELLO', 'MY']);
  });
});
