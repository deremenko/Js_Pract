const replaceString = (inputString) => {
  return inputString.indexOf('abc') !== 0
  ? inputString+'zzz'
  : 'www'+inputString.slice(3); 
}