import classes from './Line.module.css';

const Line = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div>
      {/* <select onChange={dropdownChangeHandler}>
        <option defaultValue></option>
        {props.lines.map((line) => (
          <option key={line.id} value={line.id}>
            {line.name}
          </option>
        ))}
      </select> */}
<div className={`categories ${classes.categories}`}>
      <input
        type="radio"
        id="circle"
        name="line"
        value="circle"
        onChange={dropdownChangeHandler}
      />
      <label htmlFor="circle">Circle</label>

      <input
        type="radio"
        id="district"
        name="line"
        value="district"
        onChange={dropdownChangeHandler}
      />
      <label htmlFor="district">District</label>
      </div>
    </div>
  );
};

export default Line;
