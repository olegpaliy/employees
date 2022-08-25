export const updateUser = async (personId, newValue) =>
  await fetch(
    `https://test3-c32d2-default-rtdb.europe-west1.firebasedatabase.app/persons/${personId}.json`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newValue),
    }
  );
