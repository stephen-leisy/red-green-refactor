const copyAndPush = require('./copy-and-push.js');
describe('copy and push', () => {
  it('returns a new array with a new item at the end', () => {
    const array = [1, 2, 3];
    const cloneArray = copyAndPush(array, 4);
    expect(cloneArray).toEqual([1, 2, 3, 4]);
  });
  it('the OG array remains the same', () => {
    const array = [1, 2, 3];
    copyAndPush(array, 4);
    expect(array).toEqual([1, 2, 3]);
  });
  

});
