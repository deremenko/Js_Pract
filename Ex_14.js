const parseUrlParameters = (url) => {
  const returnObject = {};
  const urlParameters = url.replace(/^https:\/\/(.*)\.(.*)\?/, '').split(/[=&;]/);

  for (let i = 0; i < urlParameters.length; i += 2) {
    const key = urlParameters[i];
    const value = urlParameters[i + 1];
    returnObject[key] = value;
  }

  return returnObject;
};