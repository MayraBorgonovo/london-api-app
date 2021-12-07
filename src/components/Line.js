import classes from "./Line.module.css";

const Line = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
      <div className={classes.lines}>
        {props.lines.map((line) => (
          <div key={line.id}>
            <input
              type="radio"
              id={line.id}
              name="line"
              value={line.id}
              onChange={dropdownChangeHandler}
            />
            <label htmlFor={line.id}>{line.name} Line</label>
          </div>
        ))}
      </div>
  );
};

export default Line;
