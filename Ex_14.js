const cutUrl = (str)=>{
    let returnObject = {}
    str = str.replace(/^https:\/\/underscorejs\.org\?/,'').split(/[=&;]/);
    for (var i = 0; i < str.length; i += 2) {
        let key = str[i];
        let value = str[i + 1];
        returnObject[key] = value;
    }
    return returnObject
    
}