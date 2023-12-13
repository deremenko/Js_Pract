const sortingProperties= (objRaw)=>{
    let bufferArr = [];
    let bufferName = [];
    let id = 0;
    objRaw.forEach((item)=>{
       if(bufferName.indexOf(item['name']) === -1) {
           bufferName.push(item['name']);
           bufferArr.push(item);
           console.log(bufferArr)
       }else {
           id = bufferArr.findIndex((element)=>{if(element['name'] === item['name'])
               return true
               })
           bufferArr[id]['price'] += item['price'];
       } 
    })
    return bufferArr        
   }
