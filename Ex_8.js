const sortFieldArray = (arr, field, direction = 'asc') => {
  switch (direction) {
    case 'asc':
      return arr.sort((a, b) => a[field] - b[field]);
    case 'desc':
      return arr.sort((a, b) => b[field] - a[field]);
  }
};
