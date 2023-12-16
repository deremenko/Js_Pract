const convertBinary = (inputString) => {
  const sanitizedString = inputString.split('|').join('');
  const binaryString = sanitizedString.replace(/_/g, '0').replace(/-/g, '1');
  return binaryString;
};

