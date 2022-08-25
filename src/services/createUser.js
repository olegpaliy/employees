export const createUser = async (person) =>
  await fetch(
    "https://test3-c32d2-default-rtdb.europe-west1.firebasedatabase.app/persons.json",
    {
      method: "POST",
      body: JSON.stringify(person),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
