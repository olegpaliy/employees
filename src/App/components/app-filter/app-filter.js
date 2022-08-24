import "./app-filter.css";

const AppFilter = (props) => {
  let lightButton = "btn btn-light";
  let blueButton = "btn btn-outline-light";

  const onButtonClick = (id) => {
    props.setActiveFilter(id);
  };

  return (
    <div className="btn-group">
      <button
        onClick={() => {
          props.allPersons();
          onButtonClick("all_people");
        }}
        type="button"
        className={
          props.activeFilter === "all_people" ? lightButton : blueButton
        }
      >
        Всі співробітники
      </button>
      <button
        onClick={() => {
          props.increasePersons();
          onButtonClick("increase_people");
        }}
        type="button"
        className={
          props.activeFilter === "increase_people" ? lightButton : blueButton
        }
      >
        На підвищення
      </button>
      <button
        onClick={() => {
          props.richPersons();
          onButtonClick("rich_people");
        }}
        type="button"
        className={
          props.activeFilter === "rich_people" ? lightButton : blueButton
        }
      >
        З/П більше 1000$
      </button>
    </div>
  );
};

export default AppFilter;
