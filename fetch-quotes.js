const fetch = require('node-fetch');

const mungeIsFun = (quote) => {
  return {
    name: quote.character,
    text: quote.quote,
    image: quote.image,
  };
};

const getQuote = async () => {
  const response = await fetch('http://futuramaapi.herokuapp.com/api/quotes');
  const body = await response.json();
  const oneQuote = body.map((quote) => {
    return mungeIsFun(quote);
  });
  return oneQuote[0];
};

module.exports = getQuote;
