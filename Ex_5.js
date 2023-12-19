const createObject = (arr) => {
  const bufferObject = {};

  arr.forEach((item) => {
    bufferObject[item[0]] = item[1];
  });

  return bufferObject;
};
