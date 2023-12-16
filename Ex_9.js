const findCommonValues = (arrOne, arrTwo) => {
  const arr = [];

  if (arrOne.length > arrTwo.length) {
    [arrOne, arrTwo] = [arrTwo, arrOne];
  }

  arrOne.forEach((item) => {
    if (arrTwo.includes(item)) {
      arr.push(item);
    }
  });

  return arr;
};
