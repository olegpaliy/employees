export const deleteUser = async (personId) =>
  await fetch(
    `https://test2-28123-default-rtdb.europe-west1.firebasedatabase.app/persons/${personId}.json`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
