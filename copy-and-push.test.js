const copyAndPush = require('./copy-and-push.js');
describe('copy and push', () => {
  it('returns an array with a new item at the end', () => {
    const array = [1, 2, 3];
    const newCrazyCoolArray = copyAndPush(array, 4);
    expect(newCrazyCoolArray).toEqual([1, 2, 3, 4]);
  });
});
