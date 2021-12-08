import React from "react";
import classes from "./Arrival.module.css";

const Arrival = (props) => {
  let timeToArrival = Math.round(props.timeToStation / 60) + "min";

  if (timeToArrival === 0) {
    timeToArrival = "Now";
  }

  if (timeToArrival < 0) {
    timeToArrival = "Departed";
  }

  return (
    <li className={classes.arrival}>
      <h2>{props.platformName}</h2>
      <div className={classes.ctn}>
        <div>
          <h3>{props.destination}</h3>
          <p className={classes.location}>{props.location}</p>
        </div>
        <p className={classes.time}>{timeToArrival}</p>
      </div>
      <p className={classes.line}>{props.name}</p>
    </li>
  );
};

export default Arrival;
