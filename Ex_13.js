const convertArrayToObjects = (arr) => {
  const assembledObject = {};
  
  arr.forEach((item) => {
    assembledObject[item['name']] = item['value'];
  });

  return assembledObject;
};
