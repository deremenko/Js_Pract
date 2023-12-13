const sortFiledArr = (arr,field,mod='asc')=>{
    switch (mod){
        case 'asc':
            return arr.sort((a,b)=>a[field]-b[field]);
            break;
        case 'desc':
            return arr.sort((a,b)=>b[field]-a[field]);
            break;
        default:
            console.log("This mode is not available in this function")
    }
}