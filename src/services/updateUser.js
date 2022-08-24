export const updateUser = async (personId, newValue) =>
  await fetch(
    `https://test2-28123-default-rtdb.europe-west1.firebasedatabase.app/persons/${personId}.json`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newValue),
    }
  );
