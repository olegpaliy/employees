import { useState } from "react";
import "./employees-add-form.css";

const EmployeesAddForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredSalary, setEnteredSalary] = useState("");

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const salaryInputChangeHandler = (event) => {
    setEnteredSalary(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredSalary < 0) {
      alert("write a valid name or salary!");
      setEnteredName("");
      setEnteredSalary("");
      return;
    }
    const persons = {
      name: enteredName,
      salary: enteredSalary,
    };
    props.onAddPerson(persons);
    setEnteredName("");
    setEnteredSalary("");
  };

  return (
    <div className="app-add-form">
      <h3>Додайте нового співробітника</h3>
      <form onSubmit={formSubmitHandler} className="add-form d-flex">
        <input
          value={enteredName}
          onChange={nameInputChangeHandler}
          type="text"
          className="form-control new-post-label"
          placeholder="як його звуть?"
        />
        <input
          onChange={salaryInputChangeHandler}
          value={enteredSalary}
          type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?"
        />

        <button type="submit" className="btn btn-outline-light">
          Додати
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
