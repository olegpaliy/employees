import { Link } from "react-router-dom";
import "./employees-list-item.css";

const EmployeesListItem = (props) => {
  const {
    person: { name, salary, id, increase } = {},
    onDelete,
    increaseHandler,
  } = props;

  const defaultClasses = "list-group-item d-flex justify-content-between";

  return (
    <li
      className={`${
        props.hasIncrease ? defaultClasses + " increase" : defaultClasses
      }`}
    >
      <Link className="links" to={`/person-detail/${id}`}></Link>

      <span className="list-group-item-label">{name}</span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + "$"}
      />

      <div className="d-flex justify-content-center align-items-center">
        <button
          onClick={() => increaseHandler(id, !increase)}
          type="button"
          className="btn-cookie btn-sm "
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button onClick={onDelete} type="button" className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
