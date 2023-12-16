const trimmerLine = (str) => {
  if (str.length > 5) {
    return str.slice(0, 3) + str.slice(-3);
  } else {
    return str[0].repeat(str.length);
  }
}
  