const sortFieldArray = (arr, field, direction = 'asc') => {
  switch (direction) {
    case 'asc':
      return typeof arr[0][field] === 'string'
        ? arr.sort((a, b) => a[field].localeCompare(b[field]))
        : arr.sort((a, b) => a[field] - b[field]);
    case 'desc':
      return typeof arr[0][field] === 'string'
        ? arr.sort((a, b) => b[field].localeCompare(a[field]))
        : arr.sort((a, b) => b[field] - a[field]);
  }
};

