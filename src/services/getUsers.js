export const getUsers = async () =>
  fetch(
    "https://test2-28123-default-rtdb.europe-west1.firebasedatabase.app/persons.json"
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
