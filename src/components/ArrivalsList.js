import { useState } from "react";
import Arrival from "./Arrival";
import classes from "./ArrivalsList.module.css";

const ArrivalsList = (props) => {
  const [filteredStation, setFilteredStation] = useState("all");
  const arrivals = props.arrivals;

  // get station names, remove duplicates, and sort alphabetically
  const stations = arrivals.map((item) => {
    return item.data.stationName;
  });
  const uniqueStations = [...new Set(stations)];
  const sortedStations = uniqueStations.sort();

  // filter arrivals by station
  let filteredResults = arrivals;
  if (filteredStation !== "all") {
    filteredResults = arrivals.filter((item) => {
      return item.data.stationName === filteredStation;
    });
  }


  const dropdownChangeHandler = (event) => {
    setFilteredStation(event.target.value);
  };

  return (
    <>
      <div className={classes.stations}>
        <h2>{props.arrivals[0].data.lineName}</h2>
        {sortedStations.map((arrival) => (
          <div key={arrival}>
            <input
              type="radio"
              id={arrival}
              name="station"
              value={arrival}
              onChange={dropdownChangeHandler}
            />
            <label htmlFor={arrival}>{arrival}</label>
          </div>
        ))}
      </div>

      <ul className={classes.arrivals}>
        {filteredResults.map((arrival) => (
          <Arrival
            key={arrival.id}
            name={arrival.data.lineName}
            direction={arrival.data.direction}
            location={arrival.data.currentLocation}
            destination={arrival.data.destinationName}
            timeToStation={arrival.data.timeToStation}
            stationName={arrival.data.stationName}
            platformName={arrival.data.platformName}
          />
        ))}
      </ul>
    </>
  );
};

export default ArrivalsList;
