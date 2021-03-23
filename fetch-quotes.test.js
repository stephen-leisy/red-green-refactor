const getQuote = require('./fetch-quotes.js');

describe('fetch quotes', () => {
  it('it should hit an API to return a single formatted quote', async () => {
    const quote = await getQuote();
    expect(quote).toEqual({
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String),
    });
  });
});
