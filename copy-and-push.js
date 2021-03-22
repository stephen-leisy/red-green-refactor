const copyAndPush = (array, item) => {
  const arrayClone = [...array];
  arrayClone.push(item);
  return arrayClone;
};
module.exports = copyAndPush;
