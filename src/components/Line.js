import classes from "./Line.module.css";

const Line = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
      <div className={classes.lines}>
        {props.lines.map((line) => (
          <div key={line.id} onClick={props.onClick}>
            <input
              type="radio"
              id={line.id}
              name="line"
              value={line.id}
              onChange={dropdownChangeHandler}
            />
            <label htmlFor={line.id}>{line.name}</label>
          </div>
        ))}
      </div>
  );
};

export default Line;
