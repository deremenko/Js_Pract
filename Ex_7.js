
const sortArr = (arrRaw) => {
  const bufferArr = [];
  let bufferNumber = 0;

  arrRaw.forEach((item, index) => {
    for (let key in item) {

      if (item[key] !== '' && item[key] !== null && item[key]!== undefined) {
        bufferNumber += 1;
      } 

    }

    if (bufferNumber > 0) {
      bufferArr.push([bufferNumber, index]);
    } 
    
    bufferNumber = 0;
  });

  bufferArr.sort((a, b) => b[0] - a[0]);
  return arrRaw = bufferArr.map((index) => arrRaw[index[1]]);
};

