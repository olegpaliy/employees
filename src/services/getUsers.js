export const getUsers = async () =>
  fetch(
    "https://test3-c32d2-default-rtdb.europe-west1.firebasedatabase.app/persons.json"
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
