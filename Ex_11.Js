const validateString = (inputString) => {
  const uniqueChars = new Set(inputString.split(''));
  return ['a', 'b', 'c'].every(char => uniqueChars.has(char));
};
