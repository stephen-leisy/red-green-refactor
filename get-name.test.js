const getName = require('./get-name.js');

describe('name from object function', () => {
  it('takes in the spot object and returns the name property', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);
    expect(name).toEqual('spot');
  });

  it('takes in the character object and returns the name property', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const name = getName(character);
    expect(name).toEqual('Aang');
  });
});
