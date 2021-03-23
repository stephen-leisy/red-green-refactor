const fetch = require('node-fetch');

const mungeIsFun = (quote) => {
  return {
    name: quote.character,
    text: quote.quote,
    image: quote.image,
  };
};

const getRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const getQuote = async () => {
  const response = await fetch('http://futuramaapi.herokuapp.com/api/quotes');
  const body = await response.json();
  const oneQuote = body.map((quote) => {
    const mungedQuote = mungeIsFun(quote);
    return mungedQuote;
  });
  const randoQuote = getRandom(oneQuote);
  return randoQuote;
};

module.exports = getQuote;
