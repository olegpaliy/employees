export const getUser = async (id) =>
  await fetch(
    `https://test3-c32d2-default-rtdb.europe-west1.firebasedatabase.app/persons/${id}.json`
  )
    .then((res) => res.json())
    .catch((e) => console.error(e));
