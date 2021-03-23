const getQuote = require('./fetch-quotes.js');

describe('fetch quotes', () => {
  it('it should hit an API to return a single formatted quote', async () => {
    const expected = {
        
    }
    const quote = await getQuote();
    expect(quote).toEqual({
      name: 'Bender',
      text: 'Bite my shiny metal ass.',
      image: 'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png',
    });
  });
});
