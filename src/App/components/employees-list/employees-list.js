import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = (props) => {
  return (
    <ul className="app-list list-group">
      {props.personsInfo.map((person) => (
        <EmployeesListItem
          hasIncrease={person.increase}
          increaseHandler={props.increaseHandler}
          person={person}
          key={person.id}
          onDelete={() => props.onDeletePerson(person.id)}
        />
      ))}
    </ul>
  );
};

export default EmployeesList;
