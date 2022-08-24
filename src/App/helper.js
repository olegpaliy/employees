export const getData = (data) => {
  let accum = [];
  for (const key in data) {
    accum.push({
      id: key,
      name: data[key].name,
      salary: data[key].salary,
      increase: data[key].increase,
    });
  }
  return accum;
};
