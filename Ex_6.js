const sortingProperties = (objRaw) => {
    const bufferArr = [];
  
    objRaw.forEach((item) => {
      const existingItem = bufferArr.find((element) => element['name'] === item['name']);
  
      if (existingItem) {
        existingItem['price'] += item['price'];
      } else {
        bufferArr.push(item);
      }
    });
  
    return bufferArr;
  };
  
