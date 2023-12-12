const replaceStr = (str) => {
    if (str.indexOf('abc') === -1 || str.indexOf('abc') > 0) {
        return str+'zzz'
    }else {
        return 'www'+str.slice(3)    
    }
}