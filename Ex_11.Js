const validationString = (str)=>{
    str = new Set(str.split(''));
    return [...str].join('')==='abc'?true:false;
}