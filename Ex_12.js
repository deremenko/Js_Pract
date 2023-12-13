const indexArr = (arr)=>{
    let minIndex = arr.indexOf(Math.min(...arr));
    let maxIndex = arr.indexOf(Math.max(...arr));
    [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];
    return arr
    
}