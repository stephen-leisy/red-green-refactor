const capitalizeAndFilter = (array) => {
  const newArray = [];
  for (const each of array) {
    const upper = each.toUpperCase();
    if (upper[0] !== 'F') {
      newArray.push(upper);
    }
  }
  return newArray;
};

module.exports = capitalizeAndFilter;
