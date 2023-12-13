const converterToObjects = (arr)=>{
    let assembledObject = {};
    arr.forEach((item)=>{
        assembledObject[item['name']] = item['value']
    })
    return assembledObject
}