export const createUser = async (person) =>
  await fetch(
    "https://test2-28123-default-rtdb.europe-west1.firebasedatabase.app/persons.json",
    {
      method: "POST",
      body: JSON.stringify(person),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
