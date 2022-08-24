import "./search-panel.css";

const SearchPanel = (props) => {
  return (
    <input
      onChange={props.filterChange}
      type="text"
      className="form-control search-input"
      placeholder="Знайти співробітника"
    />
  );
};

export default SearchPanel;
