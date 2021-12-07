import React from 'react';

import Arrival from './Arrival';
import classes from './ArrivalsList.module.css';

const ArrivalsList = (props) => {
  const date = new Date().toLocaleString('en-GB', { timeZone: 'GMT' });

  return (
    <>
    <p>{date}</p>
    <ul className={classes['movies-list']}>
      {props.arrivals.map((arrival) => (
        <Arrival
          key={arrival.id}
          direction={arrival.data.direction}
          location={arrival.data.currentLocation}
          destination={arrival.data.destinationName}
          arrivalTime={arrival.data.expectedArrival}
        />
      ))}
    </ul>
    </>
  );
};

export default ArrivalsList;
