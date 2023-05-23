export const getNestedValue = (obj, path) => {
  const properties = Array.isArray(path) ? path : path.split('.');
  return properties.reduce((result, property) => {
    if (result && result.hasOwnProperty(property)) {
      return result[property];
    }
    return undefined;
  }, obj);
};
