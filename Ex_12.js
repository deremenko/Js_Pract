const swapMinMaxElements = (arr) => {
  const minIndex = arr.indexOf(Math.min(...arr));
  const maxIndex = arr.indexOf(Math.max(...arr));
  [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];
  return arr;
};
