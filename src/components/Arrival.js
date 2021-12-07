import React from 'react';

import classes from './Arrival.module.css';



const Arrival = (props) => {

  return (
    <li className={classes.movie}>
      <h3>Location: {props.location}</h3>
      <p>Destination: {props.destination}</p>
      <p>Direction: {props.direction}</p>
      <p>Arrives in: {props.arrivalTime}</p>
    </li>
  );
};

export default Arrival;
