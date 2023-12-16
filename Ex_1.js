
const sortElements = (arr, direction) => {
  switch (direction) {
    case 'asc': 
      arr.sort((a, b) => {
        return a - b;
      })
      break;
    case 'desc':
      arr.sort((a, b) => {
        return b - a;
      })
      break;
  }
}
