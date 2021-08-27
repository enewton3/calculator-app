const clearWhiteSpace = (arr) => {
  return arr.filter((item) => {
    if (item === " ") return;
    return item;
  });
};

module.exports = clearWhiteSpace;
