const toUpCase = (array) => array.map((each) => each.toUpperCase());

const capitalizeAndFilter = (array) => toUpCase(array).filter((item) => item[0] !== 'F');

module.exports = capitalizeAndFilter;
