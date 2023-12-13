const converterBinary = (str)=>{
    str = str.split('|').join('');
    return str.replace(/_/g, '0').replace(/-/g, '1');
}
