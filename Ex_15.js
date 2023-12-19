const generateXLine = (xLineNumber) => {
  const returnArray = [];

  for (let iteration = 1; iteration <= xLineNumber; iteration++) {
    returnArray.push('x'.repeat(iteration));
  }

  return returnArray;
};
