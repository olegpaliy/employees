export const getUser = async (id) =>
  await fetch(
    `https://test2-28123-default-rtdb.europe-west1.firebasedatabase.app/persons/${id}.json`
  )
    .then((res) => res.json())
    .catch((e) => console.error(e));
