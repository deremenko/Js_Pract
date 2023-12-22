const trimLine = (str) => {
  str.length > 5
    ? str.slice(0, 3) + str.slice(-3) 
    : str[0].repeat(str.length);
}
  