
const sortArr = (arrRaw)=>{
    let valueFull = 0;
    let bufferNumber = 0;
    arrRaw.forEach((item,index)=>{
        for (let key in item){
            if (item[key] !== '' && item[key] !== null) {
                bufferNumber += 1;
            }
        }
        if (bufferNumber>valueFull && index !== 0){
        [arrRaw[index],arrRaw[index-1]] = [arrRaw[index-1], arrRaw[index]];
        }else valueFull = bufferNumber;
        bufferNumber = 0;
    })
    return arrRaw
}