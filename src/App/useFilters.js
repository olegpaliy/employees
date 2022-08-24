import { useCallback, useEffect, useState } from "react";

import { getUsers } from "../services/getUsers";
import { createUser } from "../services/createUser";
import { getData } from "./helper";
import { deleteUser } from "../services/deleteUser";
import { updateUser } from "../services/updateUser";

export const useFilters = () => {
  const [fetchedPeople, setFetchedPeople] = useState([]);
  // const [personsWithIncrease, setPersonsWithIncrease] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all_people");
  const [filteredList, setFilteredList] = useState([]);

  const filterPersonsHandler = (event) => {
    const keyword = event.target.value;
    if (keyword) {
      const result = fetchedPeople.filter((user) => {
        return user.name
          .toLocaleLowerCase()
          .includes(keyword.toLocaleLowerCase());
      });
      setFilteredList(result);
    } else {
      setFilteredList(fetchedPeople);
    }
  };

  const allPersons = () => {
    setFilteredList(fetchedPeople);
  };

  const richPersons = () => {
    setFilteredList(fetchedPeople.filter((person) => person.salary > 1000));
  };

  const names = fetchedPeople
    .filter((person) => person.increase)
    .map((user) => user.name)
    .join(", ");

  const fetchAndSetUserList = useCallback(() => {
    getUsers().then((res) => {
      setFetchedPeople(getData(res));
    });
  }, []);

  useEffect(() => {
    fetchAndSetUserList();
  }, [fetchAndSetUserList]);

  useEffect(() => {
    setFilteredList(fetchedPeople);
  }, [fetchedPeople]);

  const addFirebasePersonHandler = async (person) => {
    createUser(person).then(() => {
      fetchAndSetUserList();
    });
  };

  const deletePersonHandler = async (personId) => {
    deleteUser(personId).then(() => {
      fetchAndSetUserList();
    });
  };

  const increaseHandler = async (personId, newValue) => {
    updateUser(personId, { increase: newValue }).then(() => {
      fetchAndSetUserList();
    });
  };
  const increasePersons = () => {
    setFilteredList(fetchedPeople.filter((person) => person.increase));
  };

  //   const increaseHandler = (personId) => {
  //     if (personsWithIncrease.includes(personId)) {
  //       setPersonsWithIncrease(
  //         personsWithIncrease.filter((id) => id !== personId)
  //       );
  //     } else {
  //       setPersonsWithIncrease([...personsWithIncrease, personId]);
  //     }
  //   };

  //   const deletePersonHandler = async(personId) => {
  //     setFilteredList((prevPersons) => {
  //       return prevPersons.filter((person) => person.id !== personId);
  //     });
  //   };

  return {
    fetchedPeople,
    addFirebasePersonHandler,
    activeFilter,
    setActiveFilter,
    filteredList,
    setFilteredList,
    // personsWithIncrease,
    increaseHandler,
    deletePersonHandler,
    filterPersonsHandler,
    increasePersons,
    allPersons,
    richPersons,
    names,
  };
};
