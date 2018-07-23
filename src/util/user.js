const filterByUsername = (obj, word) => {
  return obj.filter(row => row.username === word)[0] || null;
};

export { filterByUsername };
