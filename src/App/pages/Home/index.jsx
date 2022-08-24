import AppInfo from "../../components/app-info/app-info";
import SearchPanel from "../../components/search-panel/search-panel";
import AppFilter from "../../components/app-filter/app-filter";
import EmployeesList from "../../components/employees-list/employees-list";
import EmployeesAddForm from "../../components/employees-add-form/employees-add-form";
import "../../app.css";

import { useFilters } from "../../useFilters";

function Home() {
  const {
    fetchedPeople,
    addFirebasePersonHandler,
    activeFilter,
    setActiveFilter,
    filteredList,
    personsWithIncrease,
    increaseHandler,
    deletePersonHandler,
    filterPersonsHandler,
    increasePersons,
    allPersons,
    richPersons,
    names,
  } = useFilters();

  return (
    <div className="app">
      <AppInfo names={names} count={fetchedPeople.length} />

      <div className="search-panel">
        <SearchPanel filterChange={filterPersonsHandler} />
        <AppFilter
          richPersons={richPersons}
          allPersons={allPersons}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          increasePersons={increasePersons}
        />
      </div>

      <EmployeesList
        personsWithIncrease={personsWithIncrease}
        increaseHandler={increaseHandler}
        personsInfo={filteredList}
        onDeletePerson={deletePersonHandler}
      />

      <EmployeesAddForm onAddPerson={addFirebasePersonHandler} />
    </div>
  );
}

export default Home;
