const sortingProperties = (objRaw) => {
  const bufferArr = [];
  
  objRaw.forEach((item) => {
    const existingItem = bufferArr.find((element) => element['name'] === item['name']);
    existingItem
      ? existingItem['price'] += item['price'] 
      : bufferArr.push(item);
    });
  
  return bufferArr;
};
  
