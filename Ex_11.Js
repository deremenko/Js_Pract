const validateString = (inputString) => {
  return inputString.replace(/[^a-c]/g, '') === inputString;
};
