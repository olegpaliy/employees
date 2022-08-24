import "./app-info.css";

const AppInfo = (props) => {
  return (
    <div className="app-info">
      <h1>Співробітники Arabesky Romanicus</h1>
      <h2>Загальна кількість співробітників: {props.count}</h2>
      <h2>{`Премію отримають: ${props.names}`}</h2>
    </div>
  );
};

export default AppInfo;
